const Divider = () => {
  return (
    <>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
          Personal Inquiry
        </div>
        <div className="divider lg:divider-horizontal">
          OR
        </div>
        <div className="card bg-base-300 rounded-box grid h-32 flex-grow place-items-center">
          Professional Inquiry
        </div>
      </div>
    </>
  );
};

export default Divider;
