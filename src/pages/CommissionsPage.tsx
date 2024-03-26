import * as React from "react";
import { useRecoilState } from "recoil";
import { pageAtom } from "../states/pageAtom";

const CommissionsPage = () => {
  const [, setPage] = useRecoilState(pageAtom);
  return (
    <div className="commissions-page-container w-full flex flex-col justify-center items-center">
      <span className="text-lg font-medium">TODO: Commissions Page</span>
    </div>
  );
};

export default CommissionsPage;
