import { FaBehance, FaFigma, FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function ContactNav() {
    return (
        <>
            <div className="flex h-10 gap-6 justify-between">

                <div className=" flex gap-6 items-center">
                <div className="flex items-center gap-2">
                    <IoMdMail className="h-4 w-4" />
                    <h2 className="text-[12px]">support@jaytrons.com</h2>
                </div>
                <div className="flex items-center gap-2">
                    <FaWhatsapp className="h-4 w-4" />
                    <h2 className="text-[12px]">+92-321-5236350</h2>
                </div>
                </div>

                <div className="flex items-center gap-2">

                    <FaLinkedin />
                    <FaFigma />
                    <FaGithub />
                    <FaYoutube />
                    <FaBehance />

                </div>

            </div>
        </>
    )
}