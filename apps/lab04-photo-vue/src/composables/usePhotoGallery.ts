import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

export interface UserPhoto {
  filepath: string;
  webviewPath?: string;
}

export const usePhotoGallery = () => {
  const photos = ref<UserPhoto[]>([]);
  const PHOTO_STORAGE = 'photos';

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const photosInPreferences = photoList.value ? JSON.parse(photoList.value) : [];

    // ถ้าเปิดบนเว็บ ต้องแปลงไฟล์ที่บันทึกไว้กลับมาเป็นรูปภาพ
    for (const photo of photosInPreferences) {
      const file = await Filesystem.readFile({
        path: photo.filepath,
        directory: Directory.Data,
      });
      // Web only: Load the photo as base64 data
      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }

    photos.value = photosInPreferences;
  };

  const convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
        resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  const savePicture = async (photo: Photo, fileName: string): Promise<UserPhoto> => {
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = await convertBlobToBase64(blob) as string;

    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    return {
      filepath: fileName,
      webviewPath: photo.webPath,
    };
  };

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });

    const fileName = Date.now() + '.jpeg';
    const savedFileImage = await savePicture(photo, fileName);

    photos.value = [savedFileImage, ...photos.value];
    
    // บันทึกรายการรูปลง Storage
    Preferences.set({
        key: PHOTO_STORAGE,
        value: JSON.stringify(photos.value),
    });
  };
  
  // สำคัญ! บรรทัดนี้สั่งให้โหลดรูปเก่าทันทีที่เปิดแอป
  onMounted(loadSaved);

  return {
    photos,
    takePhoto,
  };
};