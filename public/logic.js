function forwardWhatsApp() {
	const phone = '+254717563161';
	const message = encodeURIComponent('Hello Victor, I would like to request your services.');
	const url = `https://wa.me/${phone.replace('+', '')}?text=${message}`;
	window.open(url, '_blank');
}
