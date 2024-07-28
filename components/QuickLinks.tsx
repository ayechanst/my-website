const QuickLinks = () => {
  return (
    <>
      <ul className="menu menu-horizontal bg-base-200 rounded-box mt-6">
        <li>
          <a
            className="tooltip"
            data-tip="YouTube"
            href="https://www.youtube.com/channel/UCoZ6nri-YUpNPy5h6zTAoJA"
          >
            <img
              src="/youtube.svg"
              alt="Home Icon"
              className="h-5 w-5"
            />
          </a>
        </li>
        <li>
          <a
            className="tooltip"
            data-tip="Github"
            href="https://github.com/ayechanst?ocid=AIDcmmc3fhtaow_SEM_3a7855d57351117d9c41364ee276a10e:G:s"
          >
            <img
              src="/github.svg"
              alt="Home Icon"
              className="h-5 w-5"
            />
          </a>
        </li>
        <li>
          <a
            className="tooltip"
            data-tip="Medium"
            href="https://medium.com/@ayechansant"
          >
            <img
              src="/medium.svg"
              alt="Home Icon"
              className="h-5 w-5"
            />
          </a>
        </li>
      </ul>
    </>
  );
};
export default QuickLinks;
