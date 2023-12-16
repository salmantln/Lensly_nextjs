import React from 'react';
import Image from 'next/image'
// import Image from 'next/image';
// import FeatImage01 from '@/public/images/features-03-image-01.png';
// import FeatImage02 from '@/public/images/features-03-image-02.png';
// import FeatImage03 from '@/public/images/features-03-image-03.png';
// import './App.css'; // Make sure to create this CSS file
import './Zigzag.css';
import {Parallax} from "@/components/Parallax"; // Make sure to create this CSS file

export default function Zigzag() {
    return (

        <div className="section_features">
            <div class="padding-global">
                <div class="container-medium">
                    <div class="old_header-fix">
                        <div data-w-id="abf9521d-eb6d-b2c8-e2bb-5a6d658c8f45" class="stories_block-header"><h1
                            // style="transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;"
                            class="heading-style-old-h1">Features</h1>
                            <div class="text-weight-medium">
                                <div
                                    // style="transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 1; transform-style: preserve-3d;"
                                    class="text-size-old-xl">Everything you need to make it.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-dyn-list">
                        <div role="list" className="features_cards w-dyn-items">
                            <Parallax speed={1} className="self-start">
                            <div data-w-id="8c457dba-0f59-71de-284d-5565fc07edd3"
                                // style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                 role="listitem" className="features_card w-dyn-item">
                                <a href="/features/photo-filters"
                                   className="stories_cover-wrap is-stories w-inline-block">
                                    <Image
                                        width={50}
                                        height={50}
                                        alt="" loading="lazy"
                                        src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b26ef461a95e3e41a4_64f19cf0b16600af443832b9_vsco-photo-filters.webp"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 680px, 40vw"
                                        srcset="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b26ef461a95e3e41a4_64f19cf0b16600af443832b9_vsco-photo-filters-p-500.webp 500w, https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b26ef461a95e3e41a4_64f19cf0b16600af443832b9_vsco-photo-filters.webp 700w"
                                        class="stories_image"
                                        // style="transform: scale(1);"
                                    />
                                </a>
                                <div className="features_section-content is-stories-parent"
                                    // style="color: rgb(255, 255, 255);"
                                >
                                    <Image alt=""
                                           width={50}
                                           height={50}
                                           loading="lazy"
                                           src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b26ef461a95e3e41aa_64f19cf0b16600af44383263_icon-filters.svg"
                                           class="features_icon"/>
                                    <a href="/features/photo-filters" className="stories_feed-title w-inline-block">
                                        <h2 className="heading-style-old-h2">Photo Filters</h2>
                                    </a>
                                    <div className="text-color-old-light-grey"><p className="text-size-old-p2">Lensly
                                        presets
                                        offer a convenient and efficient way to enhance your photographs. The Lensly app
                                        comes with fifteen of its most popular presets included at no cost, enabling
                                        immediate editing of your images. These presets range from subtle and
                                        understated to bold and vibrant, each creating a distinct aesthetic for your
                                        photos. This variety allows for a wide range of creative expression tailored to
                                        your photographic style.</p>
                                    </div>
                                </div>
                            </div>

                            </Parallax>

                            <Parallax speed={-2} className="self-start">
                            <div data-w-id="8c457dba-0f59-71de-284d-5565fc07edd3"
                                // style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                 role="listitem" className="features_card w-dyn-item">

                                <a href="/features/video-editor"
                                   className="stories_cover-wrap is-stories w-inline-block">
                                    <Image
                                        width={50}
                                        height={50}
                                        alt="" loading="lazy"
                                        src="/img/photo_edit.webp"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 680px, 40vw"
                                        srcset="/img/photo_edit.webp 500w, /img/photo_edit.webp 700w"
                                        class="stories_image"

                                        // alt=""
                                        // loading="lazy"
                                        // width={50}
                                        // height={50}
                                        // src="/img/photo_edit.webp"
                                        // // src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b358f6038b2a142831_64f19cf0b16600af443832bb_vsco-video-editor.webp"
                                        // class="stories_image"
                                    />
                                </a>
                                <div className="features_section-content is-stories-parent">
                                    <Image alt=""
                                           width={50}
                                           height={50}
                                           loading="lazy"
                                           src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b258f6038b2a14280b_64f19cf0b16600af44383260_icon-video.svg"
                                        // src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b258f6038b2a14280b_64f19cf0b16600af44383260_icon-video.svg"
                                           class="features_icon"/>
                                    <a
                                        href="/features/video-editor" className="stories_feed-title w-inline-block">
                                        <h2 className="heading-style-old-h2">Video Editor</h2>
                                    </a>
                                    <div className="text-color-old-light-grey">
                                        <p className="text-size-old-p2">
                                            Enhance your mobile videos using Lensly&apos;s premium presets, effects, and
                                            advanced editing tools, similar to those in its photo editor. Tweak white
                                            balance and explore color adjustments with HSL. The app allows you to trim,
                                            crop, and reverse your videos, offering unique features like the Speed
                                            option for creating slow-motion effects. This comprehensive suite of tools
                                            transforms your mobile video editing experience, giving you
                                            professional-grade results on the go.</p>
                                    </div>
                                </div>
                            </div>
                            </Parallax>
                            <div data-w-id="8c457dba-0f59-71de-284d-5565fc07edd3"
                                // style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                 role="listitem" className="features_card w-dyn-item">
                                <a href="/features/photo-collage"
                                   className="stories_cover-wrap is-stories w-inline-block">
                                    <Image
                                        width={50}
                                        height={50}
                                        alt=""
                                        loading="lazy"
                                        src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b2be566b5a01657fd0_64f19cf0b16600af443832bc_vsco-collages.webp"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 680px, 40vw"
                                        srcset="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b2be566b5a01657fd0_64f19cf0b16600af443832bc_vsco-collages-p-500.webp 500w, https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b2be566b5a01657fd0_64f19cf0b16600af443832bc_vsco-collages.webp 700w"
                                        class="stories_image"
                                        // style="transform: scale(1);"
                                    /></a>
                                <div className="features_section-content is-stories-parent"
                                    // style="color: rgb(255, 255, 255);"
                                >
                                    <Image alt=""
                                           width={50}
                                           height={50} loading="lazy"

                                           src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b2be566b5a01657fcc_64f19cf0b16600af44383262_icon-collages.svg"
                                           class="features_icon"/>
                                    <a
                                        href="/features/photo-collage" className="stories_feed-title w-inline-block">
                                        <h2 className="heading-style-old-h2">Collage</h2>
                                    </a>
                                    <div className="text-color-old-light-grey"><p
                                        className="text-size-old-p2">Effortlessly
                                        create a collage in moments using Lensly&apos;s pre-designed templates or begin
                                        from
                                        scratch with a blank canvas to bring your vision to life. Personalize your
                                        creation by incorporating photos, various shapes, a spectrum of colors, and
                                        adjustable sizes. This feature offers a versatile and creative way to arrange
                                        and display your images exactly as you envisage..</p></div>
                                </div>
                            </div>
                            <div data-w-id="8c457dba-0f59-71de-284d-5565fc07edd3"
                                // style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                 role="listitem" className="features_card w-dyn-item">
                                <a href="/features/camera"
                                   className="stories_cover-wrap is-stories w-inline-block">
                                    <Image
                                        alt=""
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                        src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b258f6038b2a142800_64f19cf0b16600af443832ba_vsco-camera.webp"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 680px, 40vw"
                                        srcset="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b258f6038b2a142800_64f19cf0b16600af443832ba_vsco-camera-p-500.webp 500w, https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b258f6038b2a142800_64f19cf0b16600af443832ba_vsco-camera.webp 700w"
                                        class="stories_image"
                                        // style="transform: scale(1);"
                                    /></a>
                                <div className="features_section-content is-stories-parent"
                                    // style="color: rgb(255, 255, 255);"
                                >
                                    <Image alt=""
                                           width={50}
                                           height={50} loading="lazy"
                                           src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b258f6038b2a1427fd_64f19cf0b16600af44383261_icon-camera.svg"
                                           class="features_icon"/><a
                                    href="/features/camera" className="stories_feed-title w-inline-block"><h2
                                    className="heading-style-old-h2">Camera</h2></a>
                                    <div className="text-color-old-light-grey"><p className="text-size-old-p2">
                                        Unlock a new realm of creativity for both your photos and videos with just a
                                        swipe and a tap in Lensly. The app features four innovative camera options:
                                        Burst, Retro, Prism, and DSCO. To experience these, head to your studio in the
                                        app and tap on the Camera icon. This will open up an array of exciting, new ways
                                        to capture and create with your images and videos.</p></div>
                                </div>
                            </div>
                            <div data-w-id="8c457dba-0f59-71de-284d-5565fc07edd3"
                                // style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                 role="listitem" className="features_card w-dyn-item">
                                <a href="/features/dodge-burn"

                                   className="stories_cover-wrap is-stories w-inline-block">
                                    <Image
                                        width={50}
                                        height={50}
                                        alt=""
                                        loading="lazy"
                                        src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b275a407182502610f_64f19cf0b16600af443832bd_vsco-dodge-and-burn.webp"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 680px, 40vw"
                                        srcset="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b275a407182502610f_64f19cf0b16600af443832bd_vsco-dodge-and-burn-p-500.webp 500w, https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b275a407182502610f_64f19cf0b16600af443832bd_vsco-dodge-and-burn.webp 700w"
                                        class="stories_image"
                                        // style="transform: scale(1);"
                                    /></a>
                                <div className="features_section-content is-stories-parent"
                                    // style="color: rgb(255, 255, 255);"
                                ><Image alt=""
                                        width={50}
                                        height={50} loading="lazy"
                                        src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b275a4071825026114_64f19cf0b16600af44383265_icon-dodge.svg"
                                        class="features_icon"/><a
                                    href="/features/dodge-burn" className="stories_feed-title w-inline-block"><h2
                                    className="heading-style-old-h2">Dodge &amp; Burn</h2></a>
                                    <div className="text-color-old-light-grey">
                                        <p className="text-size-old-p2">Lensly&apos;s new Dodge and Burn tool empowers
                                            creators
                                            to manipulate light in their images. This feature enables users to address
                                            common photographic issues and direct the viewer&apos;s focus within the
                                            picture.
                                            It provides an enhanced level of control over the lighting, helping to
                                            refine the overall impact and storytelling of the image.</p>
                                    </div>
                                </div>
                            </div>
                            <div data-w-id="8c457dba-0f59-71de-284d-5565fc07edd3"
                                // style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                 role="listitem" className="features_card w-dyn-item">
                                <a href="/features/spaces"
                                   className="stories_cover-wrap is-stories w-inline-block">
                                    <Image
                                        width={50}
                                        height={50}
                                        alt=""
                                        loading="lazy"
                                        src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b239f5ae1e37b84ebc_64f19cf0b16600af443832b8_vsco-spaces-feature.webp"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 680px, 40vw"
                                        srcset="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b239f5ae1e37b84ebc_64f19cf0b16600af443832b8_vsco-spaces-feature-p-500.webp 500w, https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b239f5ae1e37b84ebc_64f19cf0b16600af443832b8_vsco-spaces-feature.webp 700w"
                                        class="stories_image"/>
                                </a>
                                <div className="features_section-content is-stories-parent">
                                    <Image alt=""
                                           width={50}
                                           height={50}
                                           loading="lazy"
                                           src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b239f5ae1e37b84ec0_64f19cf0b16600af4438325f_icon-spaces.svg"
                                           class="features_icon"/>
                                    <a
                                        href="/features/spaces"
                                        className="stories_feed-title w-inline-block">
                                        <h2 className="heading-style-old-h2">Lensly Collective Hubs</h2>
                                    </a>
                                    <div className="text-color-old-light-grey">
                                        <p className="text-size-old-p2">Lensly Collective Hubs (LCH) offers a vibrant
                                            community platform for
                                            creative collaboration. It&apos;s a dynamic space where users share,
                                            critique,
                                            and enhance their work with input from fellow creators. LCH is ideal for
                                            connecting with peers, gaining fresh insights, and fostering artistic growth
                                            within the Lensly community.</p>
                                    </div>
                                </div>


                            </div>

                            {/*<Parallax speed={-2} className="self-start">*/}
                            <div data-w-id="8c457dba-0f59-71de-284d-5565fc07edd3"
                                // style="opacity: 1; transform: translate3d(0px, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"
                                 role="listitem" className="features_card w-dyn-item">
                                <a href="/features/photo-filters"
                                   className="stories_cover-wrap is-stories w-inline-block">
                                    <Image
                                        width={50}
                                        height={50}
                                        alt="" loading="lazy"
                                        src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b26ef461a95e3e41a4_64f19cf0b16600af443832b9_vsco-photo-filters.webp"
                                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 680px, 40vw"
                                        srcset="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b26ef461a95e3e41a4_64f19cf0b16600af443832b9_vsco-photo-filters-p-500.webp 500w, https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b26ef461a95e3e41a4_64f19cf0b16600af443832b9_vsco-photo-filters.webp 700w"
                                        class="stories_image"
                                        // style="transform: scale(1);"
                                    />
                                </a>
                                <div className="features_section-content is-stories-parent"
                                    // style="color: rgb(255, 255, 255);"
                                >
                                    <Image alt=""
                                           width={50}
                                           height={50}
                                           loading="lazy"
                                           src="https://assets-global.website-files.com/64e31ee22b476f3aa3cb0a8d/64f517b26ef461a95e3e41aa_64f19cf0b16600af44383263_icon-filters.svg"
                                           class="features_icon"/>
                                    <a href="/features/photo-filters" className="stories_feed-title w-inline-block">
                                        <h2 className="heading-style-old-h2">AI Camera Settings</h2>
                                    </a>
                                    <div className="text-color-old-light-grey"><p className="text-size-old-p2">Discover
                                        the ease of photography with Lensly&apos;s AI Camera Setting Recommendation. Simply
                                        tell the app what you&apos;re capturing, and our AI fine-tunes the settings for the
                                        perfect shot. Ideal for any scene, from bustling streets to serene sunsets, our
                                        AI ensures your photos are effortlessly stunning. Experience the future of
                                        photography with Lensly – where your vision meets AI precision.</p>
                                    </div>
                                </div>
                            </div>
                            {/*</Parallax>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
