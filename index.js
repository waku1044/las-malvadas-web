

const fotos = ['file:///C:/Users/Python/Desktop/Proyecto%20hermana/img/slade.jpg','file:///C:/Users/Python/Desktop/Proyecto%20hermana/img/slade1.jpg','file:///C:/Users/Python/Desktop/Proyecto%20hermana/img/slide3.jpg','file:///C:/Users/Python/Desktop/Proyecto%20hermana/img/slide4.jpg','file:///C:/Users/Python/Desktop/Proyecto%20hermana/img/slide5.jpg','file:///C:/Users/Python/Desktop/Proyecto%20hermana/img/slide6.jpg'];
const img = document.querySelector('#img');
function prev(){
	let src = img.src;
	switch(src){
		case fotos[0]:
		img.setAttribute('src', fotos[1]);
		break;
	case fotos[1]:
		img.setAttribute('src', fotos[2]);
		break;
	case fotos[2]:
		img.setAttribute('src', fotos[3]);
		break;
	case fotos[3]:
		img.setAttribute('src', fotos[4]);
		break;
	case fotos[4]:
		img.setAttribute('src', fotos[5]);
		break;
	default:
		img.setAttribute('src', fotos[0]);
	}
console.log(src)	
}
setInterval(prev, 4000);