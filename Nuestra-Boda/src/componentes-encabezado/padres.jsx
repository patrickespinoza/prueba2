
import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const informacion = {
  padres: [
    "Alejandro Martínez Hernández",
    "María Fernanda López García",
  ],
  padrinos: [
    "Ricardo González Ramírez",
    "Patricia Hernández Flores",
  ],
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
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENTE PADRES Y PADRINOS
// ==========================================

const PadresYPadrinos = () => {
  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#F5EBDD]
        via-[#EEE5F5]
        to-[#C8B6E2]
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
    >
      {/* LUZ DECORATIVA SUPERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          -top-32
          -right-32
          h-80
          w-80
          rounded-full
          bg-white/50
          blur-[90px]
        "
      />

      {/* LUZ DECORATIVA INFERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          -left-32
          h-80
          w-80
          rounded-full
          bg-[#7765A6]/15
          blur-[90px]
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* ======================================
            ENCABEZADO
            ====================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          {/* ORNAMENTO SUPERIOR */}
          <div
            className="
              mb-6
              flex
              items-center
              justify-center
              gap-4
            "
          >
            <span className="h-px w-12 bg-[#7765A6]/60" />

            <Sparkles
              size={22}
              strokeWidth={1.2}
              className="text-[#7765A6]"
            />

            <span className="h-px w-12 bg-[#7765A6]/60" />
          </div>

          <h2
            className="
              font-playfair
              text-4xl
              font-normal
              leading-tight
              text-[#5D4E8C]
              sm:text-5xl
              md:text-6xl
            "
          >
            Padres y Padrinos
          </h2>

          <div
            className="
              mx-auto
              mt-7
              h-px
              w-24
              bg-[#7765A6]/50
            "
          />
        </motion.div>

        {/* ======================================
            CONTENEDOR PRINCIPAL
            ====================================== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            relative
            mx-auto
            mt-12
            max-w-2xl
            border
            border-[#7765A6]/30
            bg-white/65
            p-2
            shadow-[0_20px_60px_rgba(93,78,140,0.12)]
            backdrop-blur-sm
            sm:mt-16
            sm:p-3
          "
        >
          {/* MARCO INTERIOR */}
          <div
            className="
              relative
              border
              border-[#7765A6]/35
              px-5
              py-12
              text-center
              sm:px-12
              sm:py-16
            "
          >
            {/* ESQUINAS DECORATIVAS */}
            <div
              className="
                pointer-events-none
                absolute
                left-0
                top-0
                h-10
                w-10
                border-l-2
                border-t-2
                border-[#7765A6]/60
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-0
                top-0
                h-10
                w-10
                border-r-2
                border-t-2
                border-[#7765A6]/60
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-10
                w-10
                border-b-2
                border-l-2
                border-[#7765A6]/60
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                h-10
                w-10
                border-b-2
                border-r-2
                border-[#7765A6]/60
              "
            />

            {/* ==================================
                PADRES
                ================================== */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Heart
                size={25}
                strokeWidth={1.2}
                className="
                  mx-auto
                  mb-5
                  text-[#7765A6]
                "
              />

              <h3
                className="
                  font-playfair
                  text-2xl
                  font-normal
                  text-[#5D4E8C]
                  sm:text-3xl
                "
              >
                Mis Padres
              </h3>

              <div
                className="
                  mt-7
                  space-y-3
                "
              >
                {informacion.padres.map((nombre, index) => (
                  <p
                    key={index}
                    className="
                      font-playfair
                      text-lg
                      leading-relaxed
                      text-[#5D4E8C]
                      sm:text-xl
                    "
                  >
                    {nombre}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* DIVISOR */}
            <div
              className="
                my-12
                flex
                items-center
                justify-center
                gap-4
              "
            >
              <span
                className="
                  h-px
                  w-14
                  bg-[#7765A6]/45
                "
              />

              <span className="text-[#7765A6]">
                ✦
              </span>

              <span
                className="
                  h-px
                  w-14
                  bg-[#7765A6]/45
                "
              />
            </div>

            {/* ==================================
                PADRINOS
                ================================== */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              viewport={{ once: true }}
            >
              <Sparkles
                size={26}
                strokeWidth={1.2}
                className="
                  mx-auto
                  mb-5
                  text-[#7765A6]
                "
              />

              <h3
                className="
                  font-playfair
                  text-2xl
                  font-normal
                  text-[#5D4E8C]
                  sm:text-3xl
                "
              >
                Mis Padrinos
              </h3>

              <div
                className="
                  mt-7
                  space-y-3
                "
              >
                {informacion.padrinos.map((nombre, index) => (
                  <p
                    key={index}
                    className="
                      font-playfair
                      text-lg
                      leading-relaxed
                      text-[#5D4E8C]
                      sm:text-xl
                    "
                  >
                    {nombre}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* ORNAMENTO INFERIOR */}
            <div
              className="
                mt-12
                flex
                items-center
                justify-center
                gap-3
              "
            >
              <span className="h-px w-10 bg-[#7765A6]/50" />

              <span className="text-sm text-[#7765A6]">
                ✦
              </span>

              <span className="h-px w-10 bg-[#7765A6]/50" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PadresYPadrinos;
