import { FaBehance, FaFigma, FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function ContactNav() {
    return (
       
 <div className="hidden lg:block absolute top-0 left-1/2 -translate-x-1/2 z-60 bg-white w-full  py-2 px-2  ">
            <div className="mx-auto  w-[1202px] text-black">
                {/* Desktop Layout */}
                <div className="hidden md:flex h-10 gap-6 justify-between items-center">
                    <div className="flex gap-6 items-center">
                        <a
                            href="mailto:achillesion@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"
                        >
                            <IoMdMail className="h-4 w-4" />
                            <h2 className="text-[12px]">achillesion@gmail.com</h2>
                        </a>
                        <a
                            href="https://wa.me/923215236350"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 hover:text-green-400 transition-colors cursor-pointer"
                        >
                            <FaWhatsapp className="h-4 w-4" />
                            <h2 className="text-[12px]">+92-321-5236350</h2>
                        </a>
                    </div>

                    <div className="flex items-center gap-3">
                        <a
                            href="https://www.linkedin.com/in/imahmadbashir/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors cursor-pointer"
                        >
                            <FaLinkedin className="h-4 w-4" />
                        </a>
                        <a
                            href="https://www.figma.com/@ahmadbashir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition-colors cursor-pointer"
                        >
                            <FaFigma className="h-4 w-4" />
                        </a>
                        <a
                            href="https://github.com/achillesion"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-400 transition-colors cursor-pointer"
                        >
                            <FaGithub className="h-4 w-4" />
                        </a>
                        <a
                            href="https://www.youtube.com/@jaytrons"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-red-600 transition-colors cursor-pointer"
                        >
                            <FaYoutube className="h-4 w-4" />
                        </a>
                        <a
                            href="https://www.be.net/ahmadbashir"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition-colors cursor-pointer"
                        >
                            <FaBehance className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden py-3">
                    <div className="flex flex-col gap-3">
                        {/* Contact Info */}
                        <div className="flex flex-col gap-2">
                            <a
                                href="mailto:achillesion@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-pointer"
                            >
                                <IoMdMail className="h-4 w-4" />
                                <h2 className="text-[12px]">achillesion@gmail.com</h2>
                            </a>
                            <a
                                href="https://wa.me/923215236350"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-green-400 transition-colors cursor-pointer"
                            >
                                <FaWhatsapp className="h-4 w-4" />
                                <h2 className="text-[12px]">+92-321-5236350</h2>
                            </a>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pt-2 border-t border-gray-600">
                            <span className="text-[10px] text-gray-400 mr-2">Follow us:</span>
                            <a
                                href="https://www.linkedin.com/in/imahmadbashir/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-600 transition-colors cursor-pointer"
                            >
                                <FaLinkedin className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.figma.com/@ahmadbashir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition-colors cursor-pointer"
                            >
                                <FaFigma className="h-4 w-4" />
                            </a>
                            <a
                                href="https://github.com/achillesion"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gray-400 transition-colors cursor-pointer"
                            >
                                <FaGithub className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.youtube.com/@jaytrons"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-red-600 transition-colors cursor-pointer"
                            >
                                <FaYoutube className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.be.net/ahmadbashir"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors cursor-pointer"
                            >
                                <FaBehance className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
       
    )
}