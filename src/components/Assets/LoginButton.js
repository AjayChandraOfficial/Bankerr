import { motion } from "framer-motion";

const anim_buttonVariants = {
  from: { x: -400, opacity: 0 },
  to: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  exit: { x: 60, opacity: 0, transition: { duration: 0.3 } },
};
const anim_pathVariants = {};
const LoginButton = () => {
  return (
    <motion.svg
      variants={anim_buttonVariants}
      initial="from"
      animate="to"
      exit="exit"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <motion.path
        variants={anim_pathVariants}
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
        clipRule="evenodd"
      />
    </motion.svg>
  );
};
export default LoginButton;
