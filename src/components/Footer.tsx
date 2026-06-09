import React from "react";

const Footer = () => {
    return (
        <footer className="bg-zinc-950 border-t border-zinc-800/50 py-10">
            <div className="w-[88%] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                    <a href="#" className="flex items-center gap-1 mb-2">
                        <span className="text-lg font-bold text-white">jae</span>
                        <span className="text-lg font-bold text-indigo-400">.dev</span>
                    </a>
                    <p className="text-zinc-600 text-sm">
                        Frontend Engineer & AI Automation Specialist
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-1 text-zinc-500 text-sm">
                    <a href="mailto:jlee00304@gmail.com" className="hover:text-zinc-300 transition-colors">
                        jlee00304@gmail.com
                    </a>
                    <span>Seoul, South Korea</span>
                    <span className="text-zinc-700 text-xs mt-2">© {new Date().getFullYear()} Jae Yong Lee</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
