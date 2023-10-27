const Alert = () => {
  return (
    <>
      {/* <div className="alert">
        <div className="alert-logo-wrap">
          <img className="alert-logo" src="" alt="alert" />
        </div>
        <div className="alert-body">
          <h4 className="alert-title">Are You Sure?</h4>
          <p className="alert-message">You are about to delete a post.</p>
        </div>
      </div> */}

      <div className="flex items-center p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-x-4 mt-12">
        <img className="w-12 h-12 " src="/images/warning.svg" alt="" />
        <div>
          <div className="text-xl font-medium text-black">Are You Sure?</div>
          <p className="text-slate-500">You are about to delete a post.</p>
        </div>
      </div>
    </>
  );
};

export default Alert;
