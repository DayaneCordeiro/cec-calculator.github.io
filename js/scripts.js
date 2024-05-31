$(document).ready(function() {
    $('.calculate').on('click', function(e) {
        e.preventDefault();

        var pas = parseFloat($('.pas').val());
        var pad = parseFloat($('.pad').val());
        var weight = parseFloat($('.weight').val());
        var htci = parseFloat($('.htci').val());
        var vp = parseFloat($('.vp').val());

        // Calculo da Pressão de pulso
        var pp = pas - pad;
        $('.labelPp').text(pp);

        // Calculo da PAM
        var pam = pad + (pp / 3);
        $('.labelPam').text(pam.toFixed(2));

        // Calculo da SC
        var sc;
        if(weight <= 30)
            sc = ((weight * 4) + 9) / (weight + 90);
        else if(weight >= 35)
            sc = ((weight * 4) + 7) / (weight + 90)

        $('.labelSc').text(sc.toFixed(2));

        // Calculo da Heparina
        var heparine = (weight * 4) / 50;
        $('.labelHeparine').text(heparine.toFixed(2));

        // Cálculo do Débito Cardíaco
        var dc;
        if(weight <= 30)
            dc = sc * 2.4
        else if(weight >= 35)
            dc = sc * 2.2

        $('.labelDc').text(dc.toFixed(2));

        // Calculo do Manitol
        var m = weight * 3;
        $('.labelManitol').text(m.toFixed(2));

        // Cálculo do VS
        var vs;

        if (weight <= 10)
            vs = weight * 85;
        else if (weight > 10 && weight <= 20)
            vs = weight * 80;
        else if (weight > 20 && weight <= 30)
            vs = weight * 75;
        else if (weight > 30 && weight <= 40)
            vs = weight * 35;
        else if (weight > 40)
            vs = weight * 60;

        $('.labelVs').text(vs.toFixed(2));

        // Hematócrito
        var hematocrito = (htci * vs) / (vs + vp);
        $('.labelHematocrito').text(vs.toFixed(2));

        $('form input').val("");
        $('.calculate').val("Calcular");
    });

});