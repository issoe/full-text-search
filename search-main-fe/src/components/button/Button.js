import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import app from '@/firebase';
import { useState } from 'react';
import { storeLocal } from '@/store';
import { uploadFile } from '@/services/fileServices';

function Button({ item }) {
  //navigate
  const navigate = useNavigate();

  //firebase
  const auth = getAuth(app);

  // store
  const userInfo = storeLocal((state) => state.userInfo);
  const resetStore = storeLocal((state) => state.resetStore);

  // useState
  const [file, setFile] = useState(null);

  //function
  /**
   *
   */
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Đã đăng xuất');
        resetStore();
        navigate('/sign-in');
      })
      .catch((error) => {
        alert('không thể đăng xuất');
        console.log(error);
      });
    console.log('SignOut');
  };

  const handleOpenModalUpload = () => {
    document.getElementById('my_modal_upload').showModal();
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file?.name?.slice(-4) === '.pdf') {
      uploadFile({
        file: file,
        upload_id: userInfo.uid,
        upload_mail: userInfo.email,
      })
        .then((res) => {
          document.querySelector('#my_modal_upload').close();
          setFile(null);
        })
        .catch((err) => {
          console.log('err:', err);
        });
    } else {
      console.log("Can't upload file");
    }
  };
  return (
    <div
      className={`flex w-full h-full items-center hover:bg-[#1F2937] px-2 py-1 rounded-xl hover:cursor-pointer`}
      onClick={item.name === 'Sign Out' ? handleSignOut : handleOpenModalUpload}
    >
      {item.name !== 'Sign Out' && (
        <dialog id="my_modal_upload" className="modal modal-bottom sm:modal-middle text-black">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className="flex flex-col w-full justify-center justify-items-center text-black">
              <h3 className="font-bold text-lg mx-auto my-4">Upload Your File!</h3>
              <input
                type="file"
                className="file-input file-input-bordered file-input-md w-full outline-red"
                onChange={handleFile}
              />
            </div>
            <div className="modal-action">
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
              <form method="dialog">
                <button className="btn focus-visible:outline-none">Close</button>
              </form>

              <button className="btn" onClick={handleUpload}>
                Upload
              </button>
            </div>
          </div>
        </dialog>
      )}
      <div className="w-10 fill-white">{item.icon()}</div>
      <div className="px-2 flex-1 py-auto text-left">{item.name}</div>
    </div>
  );
}

export default Button;
