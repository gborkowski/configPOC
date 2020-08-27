import {
  required,
} from 'vuelidate/lib/validators';
import firebase from 'firebase/firebase';
import LoadingButton from '../../common/form/LoadingButton/LoadingButton.vue';

const firebaseConfig = {
  apiKey: 'AIzaSyDMV7NiEvOkK04idU-jz56NJcC9nITEnxM',
  authDomain: 'countertopcalculator.firebaseapp.com',
  databaseURL: 'https://countertopcalculator.firebaseio.com',
  projectId: 'countertopcalculator',
  storageBucket: 'countertopcalculator.appspot.com',
  messagingSenderId: '438842232630',
  appId: '1:438842232630:web:3b719c7e1c243225ec2d97',
  measurementId: 'G-K6JZT0H6TM',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default {
  components: {
    firebase,
    LoadingButton,
  },
  data: () => ({
    form: {
      species: 'walnut',
      width: 0,
      length: 0,
      thickness: 1.5,
      breadBoards: 'false',
      minBoardWidth: 6,
      rustic: 'false',
      addColor: 'false',
      finish: 'shellac',
    },
    results: {
      costFixed: 0,
      materialDetails: ['no details'],
      laborFixed: 0,
      laborDetails: ['no details'],
      projectTotal: 0,
    },
  }),
  methods: {
    processConfig() {
      const cost = firebase.functions().httpsCallable('calculateCountertopCost');

      cost({
        species: this.form.species,
        width: this.form.width,
        length: this.form.length,
        thickness: this.form.thickness,
        breadBoards: this.form.breadBoards,
        minBoardWidth: this.form.minBoardWidth,
        rustic: this.form.rustic,
        addColor: this.form.addColor,
        finish: this.form.finish,
      }).then((result) => {
        // window.console.log('result.data.cost: ', result.data.cost);
        this.results.costFixed = parseInt(result.data.cost.costFixed, 10);
        this.results.laborFixed = parseInt(result.data.cost.laborFixed, 10);
        this.results.projectTotal = this.results.costFixed + this.results.laborFixed;
        this.results.materialDetails = result.data.cost.materialDetails;
        this.results.laborDetails = result.data.cost.laborDetails;
      }).catch((error) => {
        window.console.log(error);
      });
    },
  },
  validations: {
    form: {
      species: { required },
      width: { required },
      length: { required },
      thickness: { required },
      breadBoards: { required },
      minBoardWidth: { required },
      rustic: { required },
      addColor: { required },
      finish: { required },
    },
  },
};
