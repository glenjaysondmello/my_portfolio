
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title">Let's Connect!</h2>
        <div className="glass-card p-8 max-w-2xl mx-auto text-center space-y-8 animate-fade-up hover-card">
          <p className="text-lg text-white/90">
            I am always open to discussing tech innovations, web development, and
            collaborative projects. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="mailto:[Your Email]"
              className="button-primary"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="[Your GitHub Profile]"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="[Your LinkedIn Profile]"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
