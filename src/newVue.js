new Vue ({
	el: '#app',
	data: {
		schooldb: [{
			id:null,
			name:null,
			email:null,
			cpf:null,
			phone:null,
		}]
	  },
	  methods: {
		getFormValues (schooldb) {
			schooldb.id += 1;
			schooldb.name = this.formName.value;
			schooldb.email = this.formEmail.value;
			schooldb.cpf = this.formCpf.value;
			schooldb.phone = this.formPhone.value;
			schooldb.photo = this.formPerfil.value;
		},
		getConsole() {
			console.log('Works');
		}
	}	
  })