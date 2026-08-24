import './style.css';

const dict = {
  en: {
    ui: {
      topSubtitle: "Professional Document", topTitle: "Practical <span>CV</span> Maker.",
      lbl_template_ats: "ATS Designs (1 Column)", lbl_template_vis: "Creative / Visual Designs",
      lbl_name: "Full Name", lbl_role: "Job Title <span>(Visual Only)</span>",
      lbl_contact: "Contact Details <span>(Use 'Enter' for new lines)</span>", lbl_photo: "Profile Photo <span>(Visual Only)</span>",
      lbl_summary: "Professional Summary", lbl_experience: "Work Experience", lbl_education: "Education", lbl_skills: "Skills", lbl_color: "Theme / Accent Color",
      downloadBtn: "Print / Download CV (PDF)", lbl_zoom: "Zoom Photo", lbl_pan_x: "Move Left/Right", lbl_pan_y: "Move Up/Down",
      btn_add_exp: "+ Add Experience", btn_add_edu: "+ Add Education", btn_add_skill: "+ Add Skill Group", btn_remove: "Delete"
    },
    cvTitle: { title_contact: "CONTACT", title_summary: "PROFESSIONAL SUMMARY", title_experience: "WORK EXPERIENCE", title_education: "EDUCATION", title_skills: "SKILLS" },
    template: {
      name: "JOHN DOE", role: "UI/UX DESIGNER",
      contact: "Jakarta, Indonesia\njohn.doe@email.com\n+62 812-3456-7890\nlinkedin.com/in/johndoe",
      summary: "Results-driven UI/UX Designer with over 3 years of experience in creating user-centric digital products. Proven ability to translate complex requirements into intuitive and aesthetic user interfaces. Skilled in Figma, wireframing, and collaborating with cross-functional teams to improve user retention by 20%.",
      experience: "UI/UX Designer | PT Maju Mundur | Jakarta, ID | Jan 2021 - Present\n- Spearheaded the redesign of the core mobile application, resulting in a 20% increase in user retention.\n- Developed and maintained a comprehensive Design System that accelerated development time by 30%.\n- Conducted A/B testing and user research to validate design decisions.\n\nJunior Designer | Tech Studio | Bandung, ID | Jun 2019 - Dec 2020\n- Assisted in creating wireframes and high-fidelity mockups for e-commerce clients.\n- Collaborated with frontend engineers to ensure pixel-perfect implementation.",
      education: "Bachelor of Computer Science | Universitas Indonesia | Aug 2015 - Sep 2019\n- GPA: 3.80/4.00\n- Relevant Coursework: Human-Computer Interaction, Web Development, Data Structures.",
      skills: "Tools: Figma, Adobe XD, Sketch, Miro, Webflow\n\nMethods: Wireframing, Prototyping, Usability Testing, User Flow\n\nCoding: HTML, CSS, Basic JavaScript"
    }
  },
  id: {
    ui: {
      topSubtitle: "Dokumen Profesional", topTitle: "Pembuat <span>CV</span> Praktis.",
      lbl_template_ats: "Pilihan Desain ATS (1 Kolom)", lbl_template_vis: "Pilihan Desain Kreatif / Visual",
      lbl_name: "Nama Lengkap", lbl_role: "Posisi <span>(Khusus Visual)</span>",
      lbl_contact: "Detail Kontak <span>(Gunakan 'Enter' untuk baris baru)</span>", lbl_photo: "Pas Foto <span>(Khusus Visual)</span>",
      lbl_summary: "Ringkasan Profil", lbl_experience: "Pengalaman Kerja", lbl_education: "Riwayat Pendidikan", lbl_skills: "Keahlian", lbl_color: "Warna Tema / Aksen",
      downloadBtn: "Cetak / Unduh CV (PDF)", lbl_zoom: "Perbesar Foto (Zoom)", lbl_pan_x: "Geser Kiri/Kanan", lbl_pan_y: "Geser Atas/Bawah",
      btn_add_exp: "+ Tambah Pengalaman", btn_add_edu: "+ Tambah Pendidikan", btn_add_skill: "+ Tambah Keahlian", btn_remove: "Hapus"
    },
    cvTitle: { title_contact: "KONTAK", title_summary: "RINGKASAN PROFIL", title_experience: "PENGALAMAN KERJA", title_education: "PENDIDIKAN", title_skills: "KEAHLIAN" },
    template: {
      name: "JOHN DOE", role: "DESAINER UI/UX",
      contact: "Jakarta, Indonesia\njohn.doe@email.com\n+62 812-3456-7890\nlinkedin.com/in/johndoe",
      summary: "Desainer UI/UX berorientasi pada hasil dengan pengalaman lebih dari 3 tahun dalam menciptakan produk digital yang berpusat pada pengguna. Terbukti mampu menerjemahkan kebutuhan yang kompleks menjadi antarmuka yang intuitif dan estetis. Ahli dalam Figma, wireframing, dan berkolaborasi dengan tim lintas fungsi untuk meningkatkan retensi pengguna sebesar 20%.",
      experience: "Desainer UI/UX | PT Maju Mundur | Jakarta, ID | Jan 2021 - Sekarang\n- Memelopori desain ulang aplikasi mobile utama, menghasilkan peningkatan retensi pengguna sebesar 20%.\n- Mengembangkan dan memelihara Design System komprehensif yang mempercepat waktu pengembangan hingga 30%.\n- Melakukan A/B testing dan riset pengguna untuk memvalidasi keputusan desain.\n\nDesainer Junior | Tech Studio | Bandung, ID | Jun 2019 - Des 2020\n- Membantu pembuatan wireframe dan mockup tingkat tinggi untuk klien e-commerce.\n- Berkolaborasi dengan engineer frontend untuk memastikan implementasi desain yang akurat.",
      education: "S1 Ilmu Komputer | Universitas Indonesia | Agu 2015 - Sep 2019\n- IPK: 3.80/4.00\n- Mata Kuliah Relevan: Interaksi Manusia-Komputer, Pengembangan Web, Struktur Data.",
      skills: "Alat: Figma, Adobe XD, Sketch, Miro, Webflow\n\nMetode: Wireframing, Prototyping, Usability Testing, User Flow\n\nPemrograman: HTML, CSS, Basic JavaScript"
    }
  }
};

let currentLang = 'id';
const cvPreviewElement = document.getElementById('cvPreview');
const langTabs = document.querySelectorAll('.lang-tab');

function updateContactFormat() {
  const activeTab = document.querySelector('.tpl-tab.active');
  if (!activeTab) return;
  const tpl = activeTab.dataset.tpl;

  let contactVal = document.getElementById('inputContact').value;
  if (tpl.includes('visual')) {
    document.getElementById('inputContact').value = contactVal.replace(/ \s*\|\s* /g, '\n').replace(/\|/g, '\n');
    if (document.getElementById('inputPhoto').files.length > 0) {
      document.getElementById('photoControls').classList.add('active');
    }
  } else {
    document.getElementById('inputContact').value = contactVal.replace(/\n+/g, ' | ');
    document.getElementById('photoControls').classList.remove('active');
  }
  document.getElementById('previewContact').textContent = document.getElementById('inputContact').value;
}

function updateDynamicPreview(field) {
  const textareas = document.querySelectorAll(`#list_${field} textarea`);
  const combined = Array.from(textareas).map(t => t.value).filter(val => val.trim() !== '').join('\n\n');
  document.getElementById(`preview${field.charAt(0).toUpperCase() + field.slice(1)}`).textContent = combined;
}

function createDynamicItem(field, value = '', focus = false) {
  const item = document.createElement('div');
  item.className = 'dynamic-item';
  const textarea = document.createElement('textarea');
  textarea.value = value; textarea.placeholder = `Ketik detail ${field}...`;
  textarea.addEventListener('input', () => updateDynamicPreview(field));

  const btnRemove = document.createElement('button');
  btnRemove.className = 'btn-remove'; btnRemove.type = 'button';
  btnRemove.textContent = dict[currentLang].ui.btn_remove;
  btnRemove.addEventListener('click', () => { item.style.opacity = '0'; setTimeout(() => { item.remove(); updateDynamicPreview(field); }, 200); });

  item.appendChild(textarea); item.appendChild(btnRemove);
  document.getElementById(`list_${field}`).appendChild(item);
  updateDynamicPreview(field);
  if (focus) textarea.focus();
}

document.getElementById('btn_add_exp').addEventListener('click', () => createDynamicItem('experience', '', true));
document.getElementById('btn_add_edu').addEventListener('click', () => createDynamicItem('education', '', true));
document.getElementById('btn_add_skill').addEventListener('click', () => createDynamicItem('skills', '', true));

function setLanguage(lang) {
  currentLang = lang;
  const data = dict[lang];

  for (const [key, value] of Object.entries(data.ui)) {
    if (key === 'topTitle') document.getElementById(key).innerHTML = value;
    else if (document.getElementById(key)) document.getElementById(key).innerHTML = value;
  }
  for (const [key, value] of Object.entries(data.cvTitle)) {
    if (document.getElementById(key)) document.getElementById(key).textContent = value;
  }
  document.querySelectorAll('.btn-remove').forEach(btn => btn.textContent = data.ui.btn_remove);

  const otherLang = lang === 'en' ? 'id' : 'en';
  ['Name', 'Role', 'Contact', 'Summary'].forEach(field => {
    const inputEl = document.getElementById(`input${field}`);
    const lowerField = field.toLowerCase();

    let isDefault = inputEl.value.trim() === '';
    if (!isDefault) {
      const otherTpl = dict[otherLang].template[lowerField];
      if (field === 'Contact') {
        isDefault = inputEl.value === otherTpl || inputEl.value === otherTpl.replace(/\n+/g, ' | ') || inputEl.value === dict[lang].template[lowerField] || inputEl.value === dict[lang].template[lowerField].replace(/\n+/g, ' | ');
      } else {
        isDefault = inputEl.value === otherTpl || inputEl.value === dict[lang].template[lowerField];
      }
    }

    if (isDefault) {
      inputEl.value = data.template[lowerField];
      document.getElementById(`preview${field}`).textContent = data.template[lowerField];
    }
  });

  ['experience', 'education', 'skills'].forEach(field => {
    const currentTextareas = document.querySelectorAll(`#list_${field} textarea`);
    const currentCombined = Array.from(currentTextareas).map(t => t.value).join('\n\n');

    let isDefaultList = currentCombined.trim() === '';
    if (!isDefaultList) {
      isDefaultList = currentCombined === dict[otherLang].template[field] || currentCombined === dict[lang].template[field];
    }

    if (isDefaultList) {
      document.getElementById(`list_${field}`).innerHTML = '';
      data.template[field].split('\n\n').forEach(part => createDynamicItem(field, part));
    }
  });

  updateContactFormat();
}

langTabs.forEach(tab => {
  tab.addEventListener('click', () => { langTabs.forEach(t => t.classList.remove('active')); tab.classList.add('active'); setLanguage(tab.dataset.lang); });
});

const tplTabs = document.querySelectorAll('.tpl-tab');
tplTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tpl-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    cvPreviewElement.className = `cv-paper ${tab.dataset.tpl}`;
    updateContactFormat();
  });
});

const zoomSlider = document.getElementById('zoomSlider');
const posXSlider = document.getElementById('posXSlider');
const posYSlider = document.getElementById('posYSlider');
const previewPhoto = document.getElementById('previewPhoto');

function updatePhotoTransform() {
  previewPhoto.style.width = `${zoomSlider.value * 100}%`;
  previewPhoto.style.height = `${zoomSlider.value * 100}%`;
  document.getElementById('val_zoom').textContent = `${parseFloat(zoomSlider.value).toFixed(1)}x`;
  previewPhoto.style.backgroundPosition = `${posXSlider.value}% ${posYSlider.value}%`;
}

zoomSlider.addEventListener('input', updatePhotoTransform); posXSlider.addEventListener('input', updatePhotoTransform); posYSlider.addEventListener('input', updatePhotoTransform);

document.getElementById('inputPhoto').addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (evt) {
      previewPhoto.style.backgroundImage = `url('${evt.target.result}')`;
      if (cvPreviewElement.className.includes('visual')) document.getElementById('photoControls').classList.add('active');
      zoomSlider.value = 1; posXSlider.value = 50; posYSlider.value = 100;
      updatePhotoTransform();
    }
    reader.readAsDataURL(file);
  }
});

const syncInputToPreview = (inputId, previewId) => { document.getElementById(inputId).addEventListener('input', function () { document.getElementById(previewId).textContent = this.value || ''; }); };
syncInputToPreview('inputName', 'previewName'); syncInputToPreview('inputRole', 'previewRole'); syncInputToPreview('inputContact', 'previewContact'); syncInputToPreview('inputSummary', 'previewSummary');

document.getElementById('inputColor').addEventListener('input', function (e) {
  document.documentElement.style.setProperty('--accent', e.target.value);
});

// INISIALISASI APLIKASI
setLanguage('id');

// KONTROL MODAL DOWNLOAD
const downloadModal = document.getElementById('downloadModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const initialDownloadBtn = document.getElementById('downloadBtn');
const finalDownloadBtn = document.getElementById('finalDownloadBtn');

// Tombol Download Awal Membuka Modal
initialDownloadBtn.addEventListener('click', () => {
    downloadModal.classList.add('active');
});

// Tutup Modal
closeModalBtn.addEventListener('click', () => downloadModal.classList.remove('active'));
downloadModal.addEventListener('click', (e) => { if (e.target === downloadModal) downloadModal.classList.remove('active'); });

// Tombol Download Final Memulai Cetak
finalDownloadBtn.addEventListener('click', () => {
    downloadModal.classList.remove('active');
    setTimeout(() => {
        window.print();
    }, 300); // Beri jeda sejenak agar modal menghilang dari animasi sebelum dicetak
});