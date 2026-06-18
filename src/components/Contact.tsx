"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [error, setError] = useState('');
    const form = useRef<HTMLFormElement>(null);

    const service_id = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const template_id = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const public_key = process.env.NEXT_PUBLIC_KEY!;

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.current) return;

        const formData = new FormData(form.current);

        if (formData.get("email_honey") !== "") return;

        const checks: [string, string][] = [
            ["user_name", "Name"],
            ["user_email", "Email"],
            ["subject", "Subject"],
            ["message", "Message"],
        ];

        for (const [field, label] of checks) {
            if (!formData.get(field)) {
                setError(`Please fill in the ${label} field`);
                return;
            }
        }

        emailjs
            .sendForm(service_id, template_id, form.current, { publicKey: public_key })
            .then(
                () => {
                    setEmailSubmitted(true);
                    setError('');
                },
                (err) => {
                    console.log('Failed:', err.text);
                }
            );
    };

    const inputClass = "w-full py-3 px-4 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/30 transition-all duration-200 text-sm";

    return (
        <div className="bg-zinc-900 py-20 md:py-28">
            <div className="w-[88%] max-w-6xl mx-auto">
                <div className="mb-14">
                    <p className="section-label">Get in touch</p>
                    <h2 className="section-heading">
                        Let&apos;s{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                            Connect
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left: info */}
                    <div>
                        <p className="text-zinc-400 text-[1.05rem] leading-relaxed mb-8">
                            I&apos;m actively exploring new opportunities in frontend engineering and AI automation.
                            Whether you have a role, a project, or just want to talk tech — I&apos;d love to hear from you.
                        </p>

                        <div className="flex flex-col gap-4 mb-8">
                            <a
                                href="mailto:jlee00304@gmail.com"
                                className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
                            >
                                <div className="w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-xl flex items-center justify-center group-hover:border-indigo-500/50 transition-colors">
                                    <EmailIcon className="text-indigo-400" style={{ fontSize: 18 }} />
                                </div>
                                <span className="text-sm">jlee00304@gmail.com</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.linkedin.com/in/jaeyong-james/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200 text-sm"
                            >
                                <LinkedInIcon style={{ fontSize: 18 }} />
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/jameslee1237"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2.5 bg-zinc-800 border border-zinc-700 rounded-lg text-zinc-400 hover:text-white hover:border-indigo-500/50 transition-all duration-200 text-sm"
                            >
                                <GitHubIcon style={{ fontSize: 18 }} />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    {/* Right: form */}
                    <div className="card p-8">
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
                            {error && (
                                <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">
                                    {error}
                                </p>
                            )}

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" name="user_name" className={inputClass} />
                                <input type="email" placeholder="Email" name="user_email" className={inputClass} />
                            </div>
                            <input type="text" placeholder="Subject" name="subject" className={inputClass} />
                            <input type="text" name="email_honey" className="hidden" />
                            <textarea
                                placeholder="Message"
                                name="message"
                                rows={5}
                                className={inputClass}
                            />

                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 py-3 px-6 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/20"
                            >
                                <span>Send Message</span>
                                <SendIcon style={{ fontSize: 16 }} />
                            </button>

                            {emailSubmitted && (
                                <p className="text-emerald-400 text-sm text-center bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2">
                                    Message sent successfully!
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
