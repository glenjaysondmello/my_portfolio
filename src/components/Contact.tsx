import { Mail } from "lucide-react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 sm:px-6">
        <h2 className="section-title">Let's Connect!</h2>
        <div className="glass-card p-8 max-w-2xl mx-auto text-center space-y-8 animate-fade-up hover-card">
          <p className="text-lg text-white/90">
            I am always open to discussing tech innovations, web development,
            and collaborative projects. Feel free to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="mailto:glendmello04@gmail.com" className="button-primary">
              <Mail size={20} />
              <span>Email</span>
            </a>
            <a
              href="https://github.com/glenjaysondmello"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              <UseAnimations animation={github} size={28} strokeColor="white" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/glen-jayson-dmello-927415251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              <UseAnimations
                animation={linkedin}
                size={28}
                strokeColor="white"
              />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/_mello.d.glen_?igsh=M2ZiemMwcXY0eGdi"
              target="_blank"
              rel="noopener noreferrer"
              className="button-secondary"
            >
              <UseAnimations
                animation={instagram}
                size={28}
                strokeColor="white"
              />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
