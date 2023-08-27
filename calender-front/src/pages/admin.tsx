import React, { FC, use, useEffect, useState } from "react";

export type AdminProps = {
  title: string;
};

const Admin: FC<AdminProps> = () => {
  const axios = require("axios");
  const urlGeneral = `${process.env.NEXT_PUBLIC_API_BASE}/general/`;
  const urlTime = `${process.env.NEXT_PUBLIC_API_BASE}/time/`;
  const [deadline, setDeadline] = useState("");
  const [requiredtime, setRequiredtime] = useState("");
  const [timeArray, setTimeArray] = useState([]);

  axios
    .get(urlGeneral)
    .then((response) => {
      setDeadline(response.data[0].deadline);
      setRequiredtime(response.data[0].requiredtime);
      console.log(response);
      console.log(response.data);
    }
    )
    .catch((error) => {
      console.log(error);
    }
    );

  return (
    <>
      <section className="acounts">
        <h1 className="text-blue-400">check acounts</h1>
      </section>
      <section className="generalSetting">
        <h1>general setting</h1>
        <a>deadline:{deadline}</a>
        <br/>
        <a>requiredtime:{requiredtime}</a>
      </section>
      <section className="time">
        <h1>time setting</h1>
      </section>
    </>
  );
};

export default Admin;
