import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import SButton from "../../components/UI/SButton";
import AuthContext from "../../contexts/AuthContext";
import SConfirmModal from "../../components/SConfirmModal";
import { useDeleteUser } from "../../services/authentication.service";

const Settings: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const { mutate: removeUser } = useDeleteUser(
    () => {
      context?.logout();
      navigate('/login');
    }
  );

  const onChangeIsOpenModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const onDeleteAccountHandler = () => {
    removeUser(context?.user?.userId ? context?.user?.userId : "");
  };

  const onLogoutHandler = () => {
    context?.logout();
    navigate("/login");
  };

  return (
    <div>
      <SConfirmModal
      open={isOpenModal}
        onCancelButton={onChangeIsOpenModal}
        onConfirmButton={onDeleteAccountHandler}
        title="Delete account"
        confirmButtonTitle="Delete"
        description="Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone."
      />
      <div className="w-full flex items-center text-teal-950">
        <button onClick={() => navigate(-1)} className="text-left m-4">
          <ArrowLeftIcon className="h-8 w-8" />
        </button>
        <div className="w-full flex justify-center pr-12">
          <h1 className="text-3xl">Settings</h1>
        </div>
      </div>
      <div className="w-full flex justify-center text-teal-950">
        <div className="w-[28rem]">
          <h2 className="text-2xl">Account</h2>
          <SButton
            title="Logout"
            onClick={onLogoutHandler}
            wrapperClassName="w-full text-center"
            className="w-full"
          />
          <hr className="mt-10" />
          <h2 className="mt-10 text-2xl">Delete Account</h2>
          <p className="mt-4">
            You will not be able to restore your account or retrieve any of the
            data you have recorded.
          </p>
          <SButton
            title="Delete"
            onClick={onChangeIsOpenModal}
            wrapperClassName="w-full text-center"
            className="w-full bg-red-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
