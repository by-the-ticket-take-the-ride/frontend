import React from "react";
import { useLocation } from "react-router-dom";
import * as auth from "../../utils/Auth";

function Activate() {
  const path = useLocation();
  const uidAndToken = path.pathname.split('/');
  const uid = uidAndToken[2];
  const token = uidAndToken[3];

  auth.activateEmail(uid, token);

  return (
    <>
    </>
  );
}

export default Activate;