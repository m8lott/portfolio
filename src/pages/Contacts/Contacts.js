import { useState, useEffect } from "react"
import "./style.css"


const Contacts = () => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

            setVisible(true);

    },[])

  return (
    <>
    <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>
                <div className={!visible ? 'hide-contacts' : 'visible-contacts'}>
                <ul className="content-list">
                    <li className={!visible ? 'content-list__item-1-hide' : 'content-list__item-1'}>
                        <h2 className="title-2">Location</h2>
                        <p>Russia, Rostov-on-Don</p>
                    </li>
                    <li className={!visible ? 'content-list__item-2-hide' : 'content-list__item-2'}>
                        <h2 className="title-2">Telegram</h2>
                        <p><a target='_blank' href="https://t.me/northsideshawty88">Click</a></p>
                    </li>
                    <li className={!visible ? 'content-list__item-3-hide' : 'content-list__item-3'}>
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:frontdev187@gmail.com">frontdev187@gmail.com</a></p>
                    </li>
                </ul>
                </div>

        </div>
    </main>
    </>
  )
}

export default Contacts;