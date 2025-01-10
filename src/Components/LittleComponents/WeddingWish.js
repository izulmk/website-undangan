import React, { useState } from "react";
import Title from "./Title";
import bintang1 from "../../assets/images/Orn-bintang.png";
import Button from "./Button";
import { Filter } from "bad-words"; // Correct import
import useVisibility from "../../hook/useVisibility";

const WeddingWish = () => {
  const { sectionRef, isVisible, sectionRef1, isVisible1 } = useVisibility(0.3);
  const [wish, setWish] = useState("");
  const [name, setName] = useState("");
  const [notification, setNotification] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [comments, setComments] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // State untuk tracking komentar yang sedang diedit

  const filter = new Filter();

  // Daftar kata kasar bahasa Indonesia
  const badWordsIndo = [
    "tai",
    "anjing",
    "babi",
    "kontol",
    "setan",
    "bajingan",
    "pelacur",
    "bego",
    "goblok",
    "idiot",
    "bangsat",
    "sialan",
    "ngentot",
    "monyet",
    "perek",
    "asu",
    "kemaluan",
    "sundel",
    "cacad",
    "tolol",
    "memek",
    "peler",
    "bodoh",
    "kampret",
    "brengsek",
    "kampungan",
    "celeng",
    "ngaco",
    "jancok",
    "bangke",
    "kerbau",
    "monyet",
    "pelacuran",
    "dongo",
    "ngesot",
    "ampas",
    "bebek",
    "bejat",
    "goblokan",
    "goblok",
    "kontolin",
    "pejantannya",
    "bodoamat",
    "pedofil",
    "tante girang",
    "bicara kasar",
    "godain",
    "cundang",
    "cewek murahan",
    "ninja",
    "ceroboh",
    "jahat",
    "setan",
    "kw",
    "ngentotin",
    "kontolan",
    "anjing bangsat",
    "gundul",
    "pejuang seks",
    "tante kunir",
    "kebel",
    "pitung",
    "cikini",
    "leceh",
    "koplak",
    "ngemis",
    "betina",
    "keresek",
    "jorok",
    "pelotot",
    "serigala",
    "toket",
    "pecundang",
    "darah rendah",
    "jakun",
    "gerobak",
    "depak",
    "tangger",
    "kemproh",
    "bandot",
    "rontok",
    "gue",
    "bajingan pembunuh",
    "goblok mampus",
    "sialan banget",
    "nenek tukang sihir",
    "panas",
    "pundung",
    "pemburu",
    "gila",
    "pintar-pintaran",
    "penipu",
    "brengsek",
    "kerupuk",
    "selingkuh",
    "badut",
    "memek",
    "pecun",
    "ngacir",
    "banshe",
    "bejat banget",
    "tak tahu malu",
    "kotor",
    "tolol banget",
    "gampangan",
    "penjahat",
    "teks aneh",
    "koplakan",
    "paling ngenes",
    "pusing",
    "terkutuk",
    "sundel bolong",
    "bandar narkoba",
    "nenek",
    "kecoa",
    "bawel",
    "gundik",
    "pelakor",
    "selingkuhan",
    "rebutan",
    "wanita simpanan",
    "suami sinting",
    "istri sinting",
    "karir doang",
    "selingkuh",
    "mertua jahat",
    "penghianat",
    "cacat pernikahan",
    "cerai",
    "janda",
    "duda",
    "biseksual",
    "komitmen hancur",
    "khianat pernikahan",
    "bercinta dengan orang lain",
    "cemburu berlebihan",
    "pernikahan gagal",
    "pernikahan sia-sia",
    "berteman dengan mantan",
    "pemerkosa",
    "keretakan hubungan",
    "cekcok",
    "berantem",
    "putus",
    "minggat",
    "kabur",
    "perselingkuhan",
    "putus hubungan",
    "istri pelakor",
    "suami pelakor",
    "suami bajingan",
    "istri bajingan",
    "main mata",
    "berpisah",
    "cerai-berai",
    "madu",
    "madu cinta",
    "pernikahan kedua",
    "rumah tangga hancur",
    "tidak setia",
    "berzina",
    "suami bejat",
    "istri bejat",
    "hancur lebur",
    "cinta palsu",
    "pernikahan jahat",
    "khianat suami",
    "khianat istri",
    "suami tak bertanggung jawab",
    "istri tak bertanggung jawab",
    "sifat egois",
    "mengecewakan pasangan",
    "melarikan diri",
    "kebohongan pernikahan",
    "penipu",
    "poligami gila",
    "menjauh",
    "melupakan pasangan",
    "saling menjauh",
    "mantan pacar",
    "mantan suami",
    "mantan istri",
    "sakit hati",
    "mencuri pasangan",
    "pertengkaran",
    "berkelahi",
    "berpisah tanpa sebab",
    "rumah tangga berantakan",
    "berpura-pura cinta",
    "suami pemalas",
    "istri pemalas",
    "benci pernikahan",
    "sikap kasar",
    "tuduhan palsu",
    "berkhianat",
    "menipu",
    "berbohong tentang pernikahan",
    "penipuan cinta",
    "putus cinta",
    "cinta bertepuk sebelah tangan",
    "keluarga bermasalah",
    "keluarga kacau",
    "cinta terlarang",
    "mencari kesalahan",
    "tidak menghargai",
    "pernikahan buruk",
    "selingkuhan gila",
    "bercinta dengan orang lain",
    "perselingkuhan dalam rumah tangga",
    "mencintai orang lain",
    "tidak percaya pada cinta",
    "hancur hati",
    "mengabaikan pasangan",
    "sifat posesif",
    "perasaan tersakiti",
    "perasaan terluka",
    "mengkhianati",
    "kentot",
    "kentotan",
    "pernikahan dalam kekerasan",
    "pernikahan menyakitkan",
    "berbohong pada pasangan",
    "selingkuh dengan teman",
    "mengabaikan perasaan",
    "pernikahan sepi",
    "pernikahan tanpa cinta",
    "murahan",
    "matre",
    "mata duitan",
    "perawan",
    "perjaka",
  ];

  // Menambahkan kata-kata kasar Indonesia ke dalam filter
  badWordsIndo.forEach((word) => filter.addWords(word));

  const handleSendClick = () => {
    if (wish.trim() === "" || name.trim() === "") {
      setNotification("Please enter your name and wish first!");
      setIsSuccess(false);
    } else if (filter.isProfane(wish) || filter.isProfane(name)) {
      setNotification("Your comment contains inappropriate language. Please rephrase it.");
      setIsSuccess(false);
    } else {
      const newComment = {
        name: filter.clean(name),
        wish: filter.clean(wish),
        date: new Date().toLocaleString(),
      };

      if (editIndex !== null) {
        // Jika sedang mengedit, update komentar yang sudah ada
        const updatedComments = [...comments];
        updatedComments[editIndex] = newComment;
        setComments(updatedComments);
        setEditIndex(null); // Reset edit mode
        setNotification("Your comment has been updated!");
      } else {
        // Jika tidak sedang mengedit, tambahkan komentar baru
        setComments([...comments, newComment]);
        setNotification("Your wish has been sent!");
      }

      setIsSuccess(true);
      setWish(""); // Clear input after submission
      setName(""); // Clear name input after submission
    }

    setTimeout(() => {
      setNotification("");
    }, 3000); // Notification disappears after 3 seconds
  };

  const handleEditClick = (index) => {
    const commentToEdit = comments[index];
    setEditIndex(index);
    setName(commentToEdit.name);
    setWish(commentToEdit.wish);
  };

  const handleDeleteClick = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    setNotification("Your comment has been deleted!");
    setTimeout(() => {
      setNotification("");
    }, 3000); // Notification disappears after 3 seconds
  };

  return (
    <div ref={sectionRef} className="flex flex-col items-center justify-center w-full font-playfair mb-24">
      <div className={`text-center mb-4 relative `}>
        <div className={`${isVisible ? "opacity-100 ping" : "opacity-0"}`}>
          <img src={bintang1} alt="bintang1" className={`absolute left-0 w-[2rem] animate-pulse `} />
          <img src={bintang1} alt="bintang1" className={`absolute right-0 w-[2rem] animate-pulse `} />
        </div>
        <Title title="WEDDING WISH" className="mt-10" />
      </div>
      <div className={`w-full max-w-md p-4 ${isVisible ? "opacity-100 animate-fadeInScale" : "opacity-0"}`}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name..." className="w-full p-2 border border-gray-300 rounded mb-4" />
        <input type="text" value={wish} onChange={(e) => setWish(e.target.value)} placeholder="Give your wish..." className="w-full p-2 border border-gray-300 rounded mb-4" />
        <div className="text-center">
          <Button text={editIndex !== null ? "Update" : "Send"} onClick={handleSendClick} />
        </div>
        {notification && <div className={`mt-4 p-2 ${isSuccess ? "bg-green-500" : "bg-red-500"} text-white text-center rounded`}>{notification}</div>}
        <div className="mt-8">
          {comments.map((comment, index) => (
            <div key={index} className="bg-white p-4 mb-4 rounded shadow">
              <p className="text-gray-700">
                <strong>{comment.name}</strong>
              </p>
              <p className="text-gray-600">{comment.wish}</p>
              <p className="text-gray-500 text-sm">{comment.date}</p>
              <div className="mt-4 flex justify-between">
                <button onClick={() => handleEditClick(index)} className="text-gray-400">
                  Edit
                </button>
                <button onClick={() => handleDeleteClick(index)} className="text-gray-400">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingWish;
