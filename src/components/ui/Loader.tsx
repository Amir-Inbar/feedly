import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="flex justify-center items-center h-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="border-8 border-gray-300 border-t-blue-500 rounded-full w-12 h-12 animate-spin" />
    </motion.div>
  );
};

export default Loader;
