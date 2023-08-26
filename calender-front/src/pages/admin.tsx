import React, { FC } from 'react'

export type AdminProps = {
    title: string
};

const Admin:FC<AdminProps> = () => {
  return (
    <>
        <section className="acounts">
            <h1>check acounts</h1>
        </section>
        <section className="generalSetting">
            <h1>general setting</h1>
        </section>
        <section className="time">
            <h1>time setting</h1>
        </section>
    </>
  )
}

export default Admin