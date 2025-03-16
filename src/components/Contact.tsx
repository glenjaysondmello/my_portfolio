import { Mail } from "lucide-react";
import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import linkedin from "react-useanimations/lib/linkedin";
import instagram from "react-useanimations/lib/instagram";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container px-4 sm:px-6">
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Let’s Connect!
        </motion.h2>

        <motion.div
          className="p-8 max-w-2xl mx-auto text-center space-y-8 bg-white/10 backdrop-blur-md shadow-lg rounded-xl border border-white/20 animate-fade-up"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-lg text-white/90">
            I’m always open to discussing tech innovations, web development, and
            collaborations. Feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {/* Email */}
            <a href="mailto:glendmello04@gmail.com" className="button-glow">
              <Mail size={20} />
              <span>Email</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/glenjaysondmello"
              target="_blank"
              rel="noopener noreferrer"
              className="button-glow"
            >
              <UseAnimations animation={github} size={28} strokeColor="white" />
              <span>GitHub</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/glen-jayson-dmello-927415251"
              target="_blank"
              rel="noopener noreferrer"
              className="button-glow"
            >
              <UseAnimations
                animation={linkedin}
                size={28}
                strokeColor="white"
              />
              <span>LinkedIn</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/_mello.d.glen_"
              target="_blank"
              rel="noopener noreferrer"
              className="button-glow"
            >
              <UseAnimations
                animation={instagram}
                size={28}
                strokeColor="white"
              />
              <span>Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
      <p className="block lg:hidden mt-20 -mb-10 text-center text-white">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-blue-400">Glen Jayson Dmello</span>.
        All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
