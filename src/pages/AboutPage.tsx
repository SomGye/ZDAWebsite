import * as React from "react";
import { useRecoilValue } from "recoil";
import { themeAtom } from "../states/themeAtom";

const AboutPage = () => {
    const theme = useRecoilValue(themeAtom);

    return (
        // TODO: styles; probably center for mobile, and alternate left/right for normal?
        <div className="flex flex-col my-4 justify-center items-center">
            {/* TODO: Intro Section... */}
            {/* TODO: Intro highlight art */}
            {/* TODO: Intro title and subtitle */}
            {/* TODO: Intro blurb, who I am, what I do, how I started; lead into start of past highlights */}
            {/* TODO: Highlights Section: 2022-2024; talk about Procreate advancements and start of Inkscape  */}
            {/* TODO: ...2022-2024 photos */}
            {/* TODO: ...2022-2024 blurb */}
            {/* TODO: Highlights Section: 2021; talk about start of Procreate, then beginnings in Huion and PenUp  */}
            {/* TODO: ...2021 photos */}
            {/* TODO: ...2021 blurb */}
            <span className="italic">Thanks for reading!</span>
        </div>
    );
};

export default AboutPage;
