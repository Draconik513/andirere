import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Wishes from "../assets/images/Wishes.jpg";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Sayangku 💕
Happy birthday yaa 🎂✨. Jujur, hubungan kita emg ga selalu gampang… kadang salah paham, kadang aku sama km sama-sama keras kepala. Tapi aku bersyukur banget, meski banyak drama kecil, kita masih milih buat bertahan sampe sekarang 🥺💖.

Aku cuma mau bilang, aku ga pernah nyesel kenal km. Km itu rumah buat aku, tempat aku balik walau dunia lagi ga ramah 🌍✨. Selalu ada aja alasan buat aku jatuh cinta lagi sama km, bahkan di momen receh sekalipun hehe💕.

Semoga di umur km yang sekarang, semua hal baik dateng ke hidup km 🌈. Km sehat terus, makin kuat, makin happy, dan mimpi-mimpi km satu-satu bisa jadi nyata 🌟.

Aku cinta km, bubub. Hari ini, besok, sampe kapanpun 💞. Makasih udah selalu milih aku, meski kita ga sempurna, kita tetep kita 🤍.
  `;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu
        </h1>

        <div className="mb-8">
          <img
            src={Wishes} // ganti vidioWishes dengan nama file gambar kalau perlu
            alt="Ucapan"
            className="w-full max-w-md mx-auto rounded-lg shadow-xl"
          />
        </div>

        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white bg-opacity-80 backdrop-blur-sm p-6 rounded-xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p key={i} className="text-pink-800 mb-4 text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="relative overflow-hidden bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg"
          >
            <span className="button-text">
              {showHeart ? "Sembunyikan Cintaku" : "Lihat Cintaku"}
            </span>
          </motion.button>
        </div>

        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            >
              <motion.div
                className="relative text-pink-500"
                animate={{ scale: [1, 1.1, 1], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="text-[12rem] select-none text-center">❤️</div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl font-bold drop-shadow-lg">
                  Andi pratama silalahi 💖
                </div>
                <div className="text-white text-lg text-center mt-4">
                  Hanya kamu di hatiku, sayang 🥹
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;
