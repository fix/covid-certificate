import qrcode from 'qrcode'
import $ from 'jquery'
import moment from 'moment'
import certificate from './certificate'


const date = moment().subtract(97, 'minutes').format('DD/MM/YYYY [a] HH[h]mm')
const sortie = moment().subtract(11, 'minutes').format('DD/MM/YYYY [a] HH[h]mm')
const name = 'nom'
const nick = 'prenom'
const birthdate = '03/08/1998'
const citybirth = 'Paris'
const address = 'Paris'
const motif = 'travail'
console.log(date)
qrcode.toCanvas(document.getElementById('qrcode'), `Cree le: ${date}; Nom: ${name}; Prenom:  ${nick}; Naissance: ${birthdate} a ${citybirth}; Adresse: ${address}; Sortie: ${sortie}; Motifs: ${motif}`, {errorCorrectionLevel: 'M', quality: .92,margin: 1})
