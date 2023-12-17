import React, {useRef, useState} from 'react';
import './contactblock.css'; // Make sure to create this CSS file
import Image from 'next/image'
import {toast} from "react-toastify";

const ContactBlock = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    // const {ref, inView} = useInView({threshold: 0.5});
    const inputRef = useRef(null);
    const subscribeUser = async (e) => {
        e.preventDefault();
        try {
            setIsSubmitting(true);
            const res = await fetch('/api/', {
                body: JSON.stringify({
                    email: email,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
            }).finally(() => {
                setIsSubmitting(false);
            });

            if (res.ok) {
                // Show a success message
                toast.success('You have successfully subscribed!');
                setEmail(""); // Reset the email state
            } else {
                // Show an error message
                toast.error('An error occurred while subscribing. Please try again later.');
            }
        } catch (error) {
            // Show an error message
            toast.error('An error occurred while subscribing. Please try again later.');
        }
    };



    return (

        <div class="contact_block">
            <div class="container flex-stretch is-contact">
                <div class="contact_block-left">
                    {/*<p class="contact_paragraph">Some of SA’s most loved brands have chosen*/}
                    {/*to partner with us. We’d love to chat about how we can help you grow yours.</p>*/}

                    <div className="field">
                        <label htmlFor="Email" className="field-label">E-mail</label>
                        <input type="email"
                               className="text_field w-input"
                               name="email"
                               placeholder="Your email"
                               id="Email"
                               required
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}
                            // value={formData.email}
                            // onChange={handleChange}
                        />
                    </div>
                </div>
                <div class="contact_block-right">

                    <div  class="contact_text-holder w-inline-block">
                        <div class="contact_hover"
                            // style="transform: translate3d(0px, 101%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d; display: block;"
                        >

                        </div>
                        <Image alt=""
                               width={200}
                               height={200}
                               src="img/JOIN US.svg"
                               onClick={(e) => subscribeUser(e)}
                               loading="eager"
                               class="contact_text-img"/></div>
                    <div class="contact_images-holder">
                        <div class="contact_image-holder is-1"
                            // style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                        >
                            <Image
                                width={50}
                                height={50}
                                src="https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff23f7279a74890ed7f8b8_Contact%20Us_First%20Image_Office.jpg"
                                loading="eager" sizes="(max-width: 767px) 32vw, (max-width: 991px) 16vw, 18vw"
                                srcset="https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff23f7279a74890ed7f8b8_Contact%20Us_First%20Image_Office-p-500.jpg 500w, https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff23f7279a74890ed7f8b8_Contact%20Us_First%20Image_Office.jpg 516w"
                                alt="" class="image_fill"/>
                            <div class="contact_block-small"></div>
                        </div>
                        <div class="contact_image-holder is-2"
                            // style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                        >
                            <Image
                                width={50}
                                height={50}
                                src="https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff240637b99f493e66936a_Contact%20Us_Second%20Image_Office.jpg"
                                loading="eager" sizes="(max-width: 767px) 32vw, (max-width: 991px) 16vw, 18vw"
                                srcset="https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff240637b99f493e66936a_Contact%20Us_Second%20Image_Office-p-500.jpg 500w, https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff240637b99f493e66936a_Contact%20Us_Second%20Image_Office.jpg 518w"
                                alt="" class="image_fill"/>
                            <div class="contact_block-middle">

                            </div>
                        </div>
                        <div
                            // style="transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                            class="contact_image-holder">
                            <Image width={50}
                                   height={50}
                                   src="https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff241430f720979f250a5b_Contact%20Us_Third%20Image_Office.jpg"
                                   loading="eager" sizes="(max-width: 767px) 32vw, (max-width: 991px) 16vw, 18vw"
                                   srcset="https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff241430f720979f250a5b_Contact%20Us_Third%20Image_Office-p-500.jpg 500w, https://assets-global.website-files.com/6270f9643e4eb6b56433f3fb/64ff241430f720979f250a5b_Contact%20Us_Third%20Image_Office.jpg 512w"
                                   alt="" class="image_fill"/>
                            <div class="contact_block-square"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactBlock;