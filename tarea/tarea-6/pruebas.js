function provarValidarEdad(){
    console.assert(
        validarEdad(3.5)==="El campo edad no puede contener números decimales, ni letras",
        "Validar edad validó una edad que contenía números decimales o letras"
    );
    
    console.assert(
        validarEdad(0)==="El campo edad no puede estar vacio","Validar edad validó un campo vacío"
    );
    console.assert(
        validarEdad(25)==="","Validar edad no validó un campo correcto"
    );
}
provarValidarEdad();
