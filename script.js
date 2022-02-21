class Teste {
    constructor() {
        this.Eventos();
    }
    Eventos() {
        let contador = 0;
        let valores = [];
        $("body").on("click", "#um", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val());
                return $("#textoCalculadora").val($("#um").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#um").val());
            }
            if(contador < 1 && $("#conta").val() != ""){
                $("#conta").val("");
                $("#textoCalculadora").val($("#um").val());
            }
            return $("#textoCalculadora").val($("#um").val());
        });
        $("body").on("click", "#dois", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val());
                return $("#textoCalculadora").val($("#dois").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#dois").val());
            }
            return $("#textoCalculadora").val($("#dois").val());
        });
        $("body").on("click", "#tres", (e) => {
            e.preventDefault();
            // $("#conta").val($("#conta").val()+$("#tres").val());
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                return $("#textoCalculadora").val($("#tres").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#tres").val());
            }
            return $("#textoCalculadora").val($("#tres").val());
        });
        $("body").on("click", "#quatro", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val());
                return $("#textoCalculadora").val($("#quatro").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#quatro").val());
            }
            return $("#textoCalculadora").val($("#quatro").val());
        });
        $("body").on("click", "#cinco", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val());
                return $("#textoCalculadora").val($("#cinco").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#cinco").val());
            }
            return $("#textoCalculadora").val($("#cinco").val());
        });
        $("body").on("click", "#seis", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val())
                return $("#textoCalculadora").val($("#seis").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#seis").val());
            }
            return $("#textoCalculadora").val($("#seis").val());
        });
        $("body").on("click", "#sete", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val())
                return $("#textoCalculadora").val($("#sete").val());
            }
            if(contador >1) {
                $("#textoCalculadora").val($("#textoCalculadora").val()+$("#sete").val());
                return  $("#conta").val($("#conta").val()+"=")
            }
            return $("#textoCalculadora").val($("#sete").val());
        });
        $("body").on("click", "#oito", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val())
                return $("#textoCalculadora").val($("#oito").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#oito").val());
            }
            return $("#textoCalculadora").val($("#oito").val());
        });
        $("body").on("click", "#nove", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val())
                return $("#textoCalculadora").val($("#nove").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#nove").val());
            }
            return $("#textoCalculadora").val($("#nove").val());
        });
        $("body").on("click", "#zero", (e) => {
            e.preventDefault();
            ++contador;
            if(isNaN($("#textoCalculadora").val())){
                $("#conta").val($("#conta").val())
                return $("#textoCalculadora").val($("#zero").val());
            }
            if(contador >1) {
                return $("#textoCalculadora").val($("#textoCalculadora").val()+$("#zero").val());
            }
            return $("#textoCalculadora").val($("#zero").val());
        });
        $("body").on("click", "#limparTudo", (e) => {
            e.preventDefault();
            $("#textoCalculadora").val("0");
            $("#conta").val("");
            contador = 0;
            return "Limpo";
        })
        $("body").on("click", "#del", (e) => {
            $("#textoCalculadora").val($("#textoCalculadora").val().substring(0, $("#textoCalculadora").val().length - 1));
        });
        $("body").on("click", "#limpar", (e) => {
            e.preventDefault();
            if($("#conta").val() != "") {
                $("#textoCalculadora").val("0");
                contador = 0;
                return "Limpo";
            }
            $("#conta").val("");
            $("#textoCalculadora").val("0");
                contador = 0;
                return "Limpo";
        });
        $("body").on("click", "#equal", (e) => {
            e.preventDefault();
            try{
                // $("#conta").val($("#conta").val()+$("#textoCalculadora").val());
            let conta = $("#conta").val();
            // let result = eval($("#conta").val());
            if($("#conta").val().includes("sqrt")) {
                $("#conta").val("");
            }
            if($("#conta").val().includes("√")) {
                $("#conta").val("");
            }
            if(conta.includes("÷")){
                conta = conta.replace("÷", "/");
                conta = conta + $("#textoCalculadora").val();
                $("#conta").val(conta.replace("/", "÷")+"=")
                contador = 0;
                return $("#textoCalculadora").val(eval(conta));
            }else if($("#conta").val().includes("x")) {
                conta = conta.replace("x", "*");
                conta = conta + $("#textoCalculadora").val();
                contador = 0;
                $("#textoCalculadora").val(eval(conta));
                return $("#conta").val(conta.replace("*", "x")+"=");
            }
            $("#conta").val($("#conta").val()+$("#textoCalculadora").val());
            $("#textoCalculadora").val(eval($("#conta").val()));
            contador = 0;
            return $("#conta").val($("#conta").val()+"=")
            }catch(SyntaxError) {
                $("#conta").val("");
                return $("#textoCalculadora").val("");
            }
        });
        $("body").on("click", "#porcentagem", (e) => {
            let valorTotal = null;
            if($("#conta").val().includes("+")) {
                valorTotal = $("#conta").val().split("+")[0];
            }else if($("#conta").val().includes("-")){
                valorTotal = $("#conta").val().split("-")[0];
            }else if($("#conta").val().includes("x")){
                valorTotal = $("#conta").val().split("x")[0];
            }else if($("#conta").val().includes("÷")) {
                valorTotal = $("#conta").val().split("÷")[0];
            }
            if($("#conta").val() == ""){
                return $("#textoCalculadora").val(Number($("#textoCalculadora").val()) * 100 / 100);
            }
            let porcentagem = (Number($("#textoCalculadora").val()) * valorTotal) / 100;
            $("#textoCalculadora").val(porcentagem);
        });
        $("body").on("click", "#add", (e) => {
            e.preventDefault();
            if($("#conta").val().includes("=")) {
                $("#conta").val(`${$("#textoCalculadora").val()}+`);
                $("#textoCalculadora").val("");
                }
                if($("#conta").val().includes("x") || $("#conta").val().includes("÷")) {
                    let conta = $("#conta").val();
                    conta = conta.replace("÷", "/");
                    conta = conta.replace("x", "*");
                    $("#conta").val(eval(conta))+"+";
                    $("#textoCalculadora").val("");
                    return
                }else if($("#conta").val().includes("-")){
                    $("#conta").val(eval(`${$('#conta').val()}-${$('#textoCalculadora').val()}`));
                    $("#textoCalculadora").val("");
                    return
                }
            if(isNaN($("#conta").val())) {
                let conta = $("#conta").val();
                $("#textoCalculadora").val(eval(conta+$("#textoCalculadora").val()));
            }
            $("#conta").val($("#textoCalculadora").val()+"+");
            return $("#textoCalculadora").val(``);
        });
        $("body").on("click", "#mult", (e) => {
            e.preventDefault();
            try{
                if($("#conta").val().includes("=")) {
                $("#conta").val(`${$("#textoCalculadora").val()}x`);
                $("#textoCalculadora").val("");
                }
                if($("#conta").val().includes("+") || $("#conta").val().includes("-")) {
                    $("#conta").val(eval($("#conta").val() + $("#textoCalculadora").val())+"x");
                    $("#textoCalculadora").val("");
                    return
                }else if($("#conta").val().includes("÷")){
                    let conta = $("#conta").val();
                    conta = conta.replace("÷", "/");
                    $("#conta").val(eval(conta))+"x";
                    $("#textoCalculadora").val("");
                    return
                }
                if(isNaN($("#conta").val())) {
                    let conta = $("#conta").val();
                    conta = conta.replace("x", "*");
                    $("#textoCalculadora").val(eval(conta));;
                }
                $("#conta").val(`${$("#textoCalculadora").val()}x`);
                return $("#textoCalculadora").val(``);
            }catch(SyntaxError) {
            }
        });
        $("body").on("click", "#divisao", (e) => {
            e.preventDefault();
            if($("#conta").val().includes("=")) {
                $("#conta").val(`${$("#textoCalculadora").val()}÷`);
                $("#textoCalculadora").val("");
            }
            if(isNaN($("#conta").val())) {
                let conta = $("#conta").val();
                conta = conta.replace("÷", "/");
                return $("#textoCalculadora").val(eval(conta));;
            }
            $("#conta").val(`${$("#textoCalculadora").val()}÷`);
            return $("#textoCalculadora").val("");
        });
        $("body").on("click", "#menos", (e) => {
            e.preventDefault();
            if($("#conta").val().includes("=")) {
                $("#conta").val(`${$("#textoCalculadora").val()}-`);
                $("#textoCalculadora").val("");
                return "foda"
            }
            if($("#conta").val().includes("x") || $("#conta").val().includes("÷")) {
                let conta = $("#conta").val();
                conta = conta.replace("÷", "/");
                conta = conta.replace("x", "*");
                $("#conta").val(eval(conta))+"-";
                $("#textoCalculadora").val("");
                return
            }else if($("#conta").val().includes("+")){
                $("#conta").val(eval(`${$('#conta').val()} + ${$('#textoCalculadora').val()}`)+"-");
                $("#textoCalculadora").val("");
                return
            }
            $("#conta").val(`${$("#textoCalculadora").val()}-`);
            return $("#textoCalculadora").val("");
        });
        $("body").on("click", "#umDivPor", (e) => {
            if($("#conta").val().includes("=")){
                $("#conta").val("");
            }
            $("#conta").val(`1/${$("#textoCalculadora").val()}`);
            $("#textoCalculadora").val(eval(`1/${$("#textoCalculadora").val()}`));
        });
        $("body").on("click", "#rQ", (e) => {
            if($("#conta").val().includes("=")){
                $("#conta").val("");
            }
            $("#conta").val(`√(${$("#textoCalculadora").val()})`);
            $("#textoCalculadora").val(Math.sqrt($("#textoCalculadora").val()));
        });
        $("body").on("click", "#elevado", (e) => {
            if($("#conta").val().includes("=")){
                $("#conta").val("");
            }
            $("#conta").val(`sqrt(${$("#textoCalculadora").val()})`);
            $("#textoCalculadora").val(`${Math.pow($("#textoCalculadora").val(), 2)}`);
        });
        $("body").on("click", "#maisOuMenos", (e) => {
            if(Number($("#textoCalculadora").val()) >0) {
                return $("#textoCalculadora").val(Number($("#textoCalculadora").val())* -1);
            }else {
                return $("#textoCalculadora").val(Number($("#textoCalculadora").val()) * -1);
            }
        });
    }
}
$(document).ready(function() {
    app = new Teste();
});
