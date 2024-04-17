import "/resources/scss/portfolio-page/Contact.scss";
import Icon from "@mdi/react";
import { mdiMapMarker, mdiEmailOutline, mdiPhoneOutline } from "@mdi/js";
function Contact() {
    return (
        <section id="contact-me">
            <div className="container">
                <div className="contact-detail">
                    <h3>Contact</h3>
                    <p>Don't be shy! Hit me up! 👇</p>
                </div>
                <div className="contact-icon">
                    <div className="contact-icon-box">
                        <span>
                            <Icon
                                path={mdiMapMarker}
                                title="User Profile"
                                size={1.3}
                                color="#147efb"
                            />
                        </span>
                        <div className="contact--info">
                            <h4>Location</h4>
                            <a>Prague/České Budějovice, Czech republic</a>
                        </div>
                    </div>
                    <div className="contact-icon-box">
                        <span>
                            <Icon
                                path={mdiEmailOutline}
                                title="User Profile"
                                size={1.3}
                                color="#147efb"
                            />
                        </span>
                        <div className="contact--info">
                            <h4>Mail</h4>
                            <a href="mailto:vojtech.tynavsky@seznam.cz">
                                vojtech.tynavsky@seznam.cz
                            </a>
                        </div>
                    </div>
                    <div className="contact-icon-box">
                        <span>
                            <Icon
                                path={mdiPhoneOutline}
                                title="User Profile"
                                size={1.3}
                                color="#147efb"
                            />
                        </span>
                        <div className="contact--info">
                            <h4>Phone</h4>
                            <a href="tel:+420778509584">+420778509584</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
