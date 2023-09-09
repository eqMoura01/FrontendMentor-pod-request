var emailInput = document.getElementById("email");
        var mensagemErro = document.getElementById("mensagem-erro");

        emailInput.addEventListener("input", function () {
          // Expressão regular para validar email
          var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

          if (regex.test(emailInput.value)) {
            // O email é válido
            mensagemErro.innerHTML = "";
          } else {
            // O email é inválido
            mensagemErro.innerHTML = "Ops... verifique seu email.";
          }
        });