import React from 'react'

function ContactSection() {
    return (
        <section id="contact" className="min-h-screen px-6 py-20">
            <div className="mx-auto max-w-6xl">
                <div className="mb-14 text-center">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-500"> Contact </p>
                    <h2 className="text-4xl font-bold text-gray-900 md:text-5xl"> Let's Work Together </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Have a project idea or want to discuss an opportunity?
                        Feel free to reach out. I'll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid gap-10 md:grid-cols-2">
                    <div className="rounded-2xl bg-gray-100 p-8">
                        <h3 className="text-2xl font-bold text-gray-900"> Get in Touch </h3>
                        <p className="mt-4 leading-7 text-gray-600">
                            I'm always open to discussing new projects, creative ideas,
                            or opportunities to be part of your team.
                        </p>
                        <div className="mt-8 space-y-6">
                            <div>
                                <p className="text-sm font-semibold text-gray-500"> Email </p>
                                <a href="mailto:rkumar96347@gmail.com" target="_blank" rel='nonreferer' className="mt-1 block text-lg font-medium text-gray-900 hover:text-blue-500" >
                                    rkumar96347@gmail.com
                                </a>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-500"> Location </p>
                                <p className="mt-1 text-lg font-medium text-gray-900">  India </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-500"> Availability </p>
                                <p className="mt-1 text-lg font-medium text-green-600"> Open to opportunities </p>
                            </div>

                        </div>

                        <div className="mt-8 flex gap-4">
                            <a href="https://github.com/rk305" target="_blank" rel='nonreferer' className="rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500">
                                GitHub
                            </a>
                            <a href="https://linkedin.com/in/rohit-kumar96347" target="_blank" rel='nonreferer' className="rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-medium text-gray-900 transition hover:border-blue-500 hover:text-blue-500"  >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                    <form className="rounded-2xl border border-gray-200 p-8 shadow-sm">
                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">  Name </label>
                            <input type="text" placeholder="Enter your name" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500" />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">  Email </label>
                            <input type="email" placeholder="Enter your email" className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label className="mb-2 block text-sm font-semibold text-gray-700"> Message </label>
                            <textarea rows="6" placeholder="Write your message..." className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"></textarea>
                        </div>

                        <button type="submit" className="w-full rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600" >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
