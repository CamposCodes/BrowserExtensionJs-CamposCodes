let camposImages = [
    "https://scontent.fjdf2-1.fna.fbcdn.net/v/t39.30808-6/310764704_117177284472273_3990229113479518251_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=8I7W4rw2YaEAX_3Ynf7&_nc_ht=scontent.fjdf2-1.fna&oh=00_AT8PSShyUdCAaqe8F_QFsLySQhK0nJ_G_vylhiBhRLYcZA&oe=63412B69",
    "https://scontent.fjdf2-2.fna.fbcdn.net/v/t39.30808-6/310846858_117177287805606_1739900853582718105_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=f4aavbeFoAIAX9lcgyf&tn=NNKNuZfdHcd3l1kO&_nc_ht=scontent.fjdf2-2.fna&oh=00_AT_5XM4d5wXE9vWbe65JtlJIk_qkSonurrkmpwu7ty-WgA&oe=63408A45",
    "https://scontent.fjdf2-1.fna.fbcdn.net/v/t39.30808-6/310774660_117177301138938_5637211018111015531_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=RTXsYbeH3r8AX9CXdJu&_nc_ht=scontent.fjdf2-1.fna&oh=00_AT-5dQsODvdxQfJp6YqYuUXh2FpuGju2JsCVBEdAem6vzg&oe=6340408E",
    "https://scontent.fjdf2-1.fna.fbcdn.net/v/t39.30808-6/310543205_117177341138934_536886512102821135_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=ogYO8vgQzlEAX9Y6_oT&_nc_ht=scontent.fjdf2-1.fna&oh=00_AT9aOnKMsvKdagc2VjfxFAh4N-tMPTj9qwBUhG0LZOL3uQ&oe=63409B55",
    "https://scontent.fjdf2-1.fna.fbcdn.net/v/t39.30808-6/310833329_117177367805598_2129876287575707351_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=15jHR-qCbvMAX8JgvIl&_nc_ht=scontent.fjdf2-1.fna&oh=00_AT9ybvPF12SL0q_LCQXuaGmAbdxN3syGAmDcejWODTb_qg&oe=634140E0",
    "https://scontent.fjdf2-2.fna.fbcdn.net/v/t39.30808-6/310768379_117177357805599_3632953863856555482_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=aN5mDr-JlBgAX-1HQBO&tn=NNKNuZfdHcd3l1kO&_nc_ht=scontent.fjdf2-2.fna&oh=00_AT9x1AqfSM6OmJ8S972_YstDDc27dsr7zmvuJY7YpoTLhQ&oe=63410B96",
    "https://scontent.fjdf2-2.fna.fbcdn.net/v/t39.30808-6/310704042_117177417805593_1812443410007536878_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=jM5nMzVzid4AX_ZSvWW&_nc_ht=scontent.fjdf2-2.fna&oh=00_AT9ktZ0k3A707vVeexm0iIH2s1pxeJ1JWY-Bx5rz26snQw&oe=63405637",
];

const imgs = document.getElementsByTagName("img");

for(let i = 0; i < imgs.length; i++){
    const radomImg = Math.floor(Math.random() * camposImages.length);
    imgs[i].src = camposImages[radomImg];
}

const titles = document.getElementsByTagName("h3");

for(let i = 0; i < titles.length; i++){
    titles[i].innerText = "Campos Codes was here !";
}

const spans = document.getElementsByTagName("span");
for(let i = 0; i < spans.length; i++){
    spans[i].innerText = "CamposCodes";
}