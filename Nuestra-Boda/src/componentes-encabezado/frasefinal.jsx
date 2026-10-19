
import React from "react";
import { motion } from "framer-motion";
import { Crown, Sparkles, Heart } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const informacion = {
  frase:
    "Hay momentos que se convierten en recuerdos eternos, y personas que los hacen inolvidables. Gracias por ser parte de este sueño y acompañarme en uno de los días más especiales de mi vida.",

  nombre: "Allison",

  fecha: "11 · 07 · 2027",
};

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENTE FRASE FINAL
// ==========================================

const FraseFinal = () => {
  return (
    <section
      className="
        relative
        isolate
        w-full
        min-h-[85vh]
        flex
        items-center
        justify-center
        overflow-hidden
        bg-gradient-to-b
        from-[#5D4E8C]
        via-[#7765A6]
        to-[#5D4E8C]
        px-5
        py-24
        sm:px-8
        sm:py-32
      "
    >
      {/* LUZ SUPERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -left-32
          h-80
          w-80
          rounded-full
          bg-[#F5EBDD]/15
          blur-[90px]
        "
      />

      {/* LUZ INFERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -right-32
          h-96
          w-96
          rounded-full
          bg-[#C8B6E2]/25
          blur-[100px]
        "
      />

      {/* MARCO EXTERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-4
          border
          border-[#F5EBDD]/35
          sm:inset-8
        "
      />

      {/* MARCO INTERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-6
          border
          border-white/15
          sm:inset-11
        "
      />

      {/* DESTELLO IZQUIERDO */}
      <motion.div
        className="
          pointer-events-none
          absolute
          left-[9%]
          top-[18%]
          text-[#F5EBDD]/80
        "
        animate={{
          opacity: [0.3, 1, 0.3],
          scale: [0.8, 1.15, 0.8],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Sparkles size={27} strokeWidth={1.1} />
      </motion.div>

      {/* DESTELLO DERECHO */}
      <motion.div
        className="
          pointer-events-none
          absolute
          right-[9%]
          bottom-[20%]
          text-[#F5EBDD]/70
        "
        animate={{
          opacity: [0.2, 0.9, 0.2],
          scale: [0.75, 1.1, 0.75],
          rotate: [0, -20, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Sparkles size={32} strokeWidth={1.1} />
      </motion.div>

      {/* ======================================
          CONTENIDO PRINCIPAL
          ====================================== */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-3xl
          flex-col
          items-center
          text-center
        "
      >
        {/* CORONA */}
        <motion.div
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            mb-8
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-[#F5EBDD]/45
            bg-white/10
            text-[#F5EBDD]
            backdrop-blur-sm
          "
        >
          <Crown size={30} strokeWidth={1.2} />
        </motion.div>

        {/* ETIQUETA */}
        <p
          className="
            mb-5
            font-playfair
            text-xs
            uppercase
            tracking-[0.4em]
            text-[#F5EBDD]
            sm:text-sm
          "
        >
          Mis XV años
        </p>

        {/* ORNAMENTO SUPERIOR */}
        <div
          className="
            mb-8
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-12 bg-[#F5EBDD]/65" />

          <Sparkles
            size={18}
            strokeWidth={1.2}
            className="text-[#F5EBDD]"
          />

          <span className="h-px w-12 bg-[#F5EBDD]/65" />
        </div>

        {/* COMILLAS */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
            font-playfair
            text-7xl
            leading-none
            text-[#F5EBDD]
            sm:text-8xl
          "
        >
          “
        </motion.div>

        {/* FRASE PRINCIPAL */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className="
            -mt-3
            max-w-2xl
            font-playfair
            text-xl
            italic
            leading-[1.9]
            text-white
            sm:text-2xl
            md:text-3xl
          "
        >
          {informacion.frase}
        </motion.p>

        {/* DIVISOR */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className="
            my-10
            flex
            items-center
            justify-center
            gap-4
          "
        >
          <span className="h-px w-14 bg-[#F5EBDD]/75" />

          <Heart
            size={17}
            strokeWidth={1.2}
            className="text-[#F5EBDD]"
          />

          <span className="h-px w-14 bg-[#F5EBDD]/75" />
        </motion.div>

        {/* NOMBRE */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
          viewport={{ once: true }}
          className="
            font-cursiveDancing
            text-6xl
            font-normal
            leading-tight
            text-[#F5EBDD]
            drop-shadow-[0_5px_15px_rgba(46,46,46,0.2)]
            sm:text-7xl
            md:text-8xl
          "
        >
          {informacion.nombre}
        </motion.h2>

        {/* FECHA */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.9,
          }}
          viewport={{ once: true }}
          className="
            mt-6
            font-playfair
            text-xs
            tracking-[0.35em]
            text-white/85
            sm:text-sm
          "
        >
          {informacion.fecha}
        </motion.p>

        {/* ORNAMENTO FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
          }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Sparkles
            size={22}
            strokeWidth={1.2}
            className="text-[#F5EBDD]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default FraseFinal;
