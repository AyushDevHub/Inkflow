import { useEffect, useState } from "react";

import illu1 from "../assets/PNG/Call waiting_DrawKit_Vector_Illustrations.png";
import illu2 from "../assets/PNG/Cat shot_DrawKit_Vector_Illustrations.png";
import illu3 from "../assets/PNG/Coffe call_DrawKit_Vector_Illustrations.png";
import illu4 from "../assets/PNG/Dog call_DrawKit_Vector_Illustrations.png";
import illu5 from "../assets/PNG/Podcast_DrawKit_Vector_Illustrations.png";
import illu6 from "../assets/PNG/Selfie_DrawKit_Vector_Illustrations.png";
import illu7 from "../assets/PNG/Shopping call_DrawKit_Vector_Illustrations.png";

const illustrations = [illu1, illu2, illu3, illu4, illu5, illu6, illu7];

export default function NoteView({ note, onClose }) {
    const [image, setImage] = useState("");

    useEffect(() => {
        const random =
            illustrations[Math.floor(Math.random() * illustrations.length)];
        setImage(random);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
            <div
                className="relative w-full h-full max-w-3xl mx-auto overflow-hidden shadow-2xl"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <button
                    className="absolute top-5 right-5 z-20 text-white bg-black/30 hover:bg-black/60 p-2 rounded-full w-10 h-10"
                    onClick={onClose}
                >
                    <i className="bx bx-x text-xl"></i>
                </button>
                <div className="relative z-10 h-full overflow-y-auto scrollbar-hide p-8 flex flex-col">
                    <h2 className="text-white text-3xl font-bold mb-4">{note.title}</h2>

                    <p className="text-white whitespace-pre-line text-lg leading-relaxed">
                        {note.content}
                    </p>
                </div>
            </div>
        </div>
    );
}
