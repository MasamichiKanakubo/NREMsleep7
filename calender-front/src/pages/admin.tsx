import React, { FC } from "react";

export type AdminProps = {
  title: string;
};

const Admin: FC<AdminProps> = () => {
  const axios = require("axios");
  const dataGeneral = { deadline: "2023-8-28", requiredtime: "1" };
  const url = `${process.env.NEXT_PUBLIC_API_BASE}/general/`;
  axios
    .post(url, dataGeneral)
    .then(function (response: { deadline: string; requiredtime: string }) {
      console.log(response);
    })
    .catch(function (error: any) {
      console.log(error);
    });
  return (
    <>
      <section className="acounts">
        <h1 className="text-blue-400">check acounts</h1>
      </section>
      <section className="generalSetting">
        <h1>general setting</h1>
      </section>
      <section className="time">
        <h1>time setting</h1>
      </section>
    </>
  );
};

export default Admin;
