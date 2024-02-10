$(".item").on("click", (event) => {
    var inputs = event.target.textContent;
    var updated;

    if (inputs == '0') {
        updated = 'Package laga Diya';
    } else if (inputs == '1') {
        updated = 'Kal hi to loon liya tha';
    } else if (inputs == '2') {
        updated = 'only islamic ringtone laga gi';
    } else if (inputs == '3') {
        updated = 'Baap ko bhej';
    } else if (inputs == '4') {
        updated = 'kitne packge lagai ga';
    } else if (inputs == '5') {
        updated = 'Mujhe Ghar jana ha';
    } else if (inputs == '6') {
        updated = 'Welldone, ka account ban gya';
    } else if (inputs == '7') {
        updated = 'loon ke lie guarti lao';
    } else if (inputs == '8') {
        updated = 'kal package ho jao ga ';
    } else if (inputs == '9') {
        updated = 'Abb bas';
    } else if (inputs == '.') {
        updated = 'chota ha per maza kare ga';
    } else if (inputs == '#') {
        updated = 'id ban gye';
    } else {
        updated = 'tu mere naal titu patiyan la raya han';
    }

    $(".inputed").val(updated);
});
