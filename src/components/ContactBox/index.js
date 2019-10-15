import React, { useState } from 'react';
import axios from 'axios';

import TitleBox from '../TitleBox';
import * as S from './styled';

function ContactBox() {
	const [ name, setName ] = useState('');
	const [ telefone, setTelefone ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ areaAtuacao, setAreaAtuacao ] = useState('');
	const [ message, setMessage ] = useState('');
	const [ sucessMessage, setSucessMessage ] = useState(false);

	function handleSubmit(event) {
		if (email === '' || name === '' || telefone === '' || areaAtuacao === '' || message === '') {
			alert('Preencha todos os campos ');
		}
		axios
			.post(`https://calm-hamlet-35252.herokuapp.com/email`, {
				name,
				message,
				telefone,
				email,
				areaAtuacao
			})
			.then((resp) => {
				console.log(resp);
				if (resp.status === 200) {
					setSucessMessage(true);
					setName('');
					setEmail('');
					setTelefone('');
					setAreaAtuacao('');
					setMessage('');
				}
			})
			.catch((err) => {
				console.log(err);
				alert('Alguma coisa deu errado, por favor tente novamente.');
			});
		event.preventDefault();
	}

	const options = [
		'Direito Empresarial',
		'Direito da Familia',
		'Direito Cívil',
		'Direito do Trabalho',
		'Direito Imobiliário',
		'Direito Tributário',
		'Direito Administrativo'
	];
	return (
		<S.ContactBoxWrapper>
			<S.ContactBoxContainer>
				<S.ContactBoxContent>
					<TitleBox style={{ color: '#fff' }} text="Contatos" />
					{sucessMessage && (
						<h2
							style={{
								color: 'red',
								alignSelf: 'center',
								textAlign: 'center',
								fontSize: '3em',
								marginBottom: 15,
								fontFamily: 'Roboto-BoldCondensed'
							}}
						>
							Mensagem enviada com sucesso.
						</h2>
					)}
					<S.ContactBoxInfoBox>
						<S.ContactBoxInfoItem>
							<S.ContactBoxInfoAndress>
								Avenida Desembargador Amaral, n° 221, Centro, Amarante - PI, 64400-000
							</S.ContactBoxInfoAndress>
							<S.ContactBoxInfoTel>
								Telefone:{' '}
								<S.ContactBoxInfoTelLink
									href="https://api.whatsapp.com/send?1=pt_BR&phone=5586994694942"
									target="blanck"
								>
									(86) 9 9851-3970
								</S.ContactBoxInfoTelLink>
							</S.ContactBoxInfoTel>
							<S.ContactBoxInfoMail>
								E-mail: <S.ContactBoxInfoMailLink>vicenteemoura@gmail.com</S.ContactBoxInfoMailLink>
							</S.ContactBoxInfoMail>
						</S.ContactBoxInfoItem>
						<S.ContactBoxInfoItem>
							<S.ContactBoxInfoAndress>
								Avenida Alberto Leal Nunes, n° 396, Centro, Regeneração - PI, 64490-000
							</S.ContactBoxInfoAndress>
							<S.ContactBoxInfoTel>
								Telefone:{' '}
								<S.ContactBoxInfoTelLink
									href="https://api.whatsapp.com/send?1=pt_BR&phone=5586994694942"
									target="blanck"
								>
									(86) 9 9469-4942
								</S.ContactBoxInfoTelLink>
							</S.ContactBoxInfoTel>
							<S.ContactBoxInfoMail>
								E-mail: <S.ContactBoxInfoMailLink>vicenteemoura@gmail.com</S.ContactBoxInfoMailLink>
							</S.ContactBoxInfoMail>
						</S.ContactBoxInfoItem>
						<S.ContactBoxFormBox>
							<S.ContactBoxForm>
								<S.ContactBoxFormInput
									type="text"
									placeholder="Nome"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>
								<S.ContactBoxFormInput
									type="email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<S.ContactBoxFormInput
									type="tel"
									placeholder="Telefone"
									value={telefone}
									onChange={(e) => setTelefone(e.target.value)}
									required
								/>
								<S.ContactBoxFormOption
									placeholder="Selecione o assunto"
									value={areaAtuacao}
									onChange={(e) => setAreaAtuacao(e.target.value)}
									required
								>
									<option value="" disabled selected>
										Selecione a área de atuação...
									</option>
									{options.map((item) => (
										<option style={{ color: 'red' }} name={item} value={item}>
											{item}
										</option>
									))}
								</S.ContactBoxFormOption>
								<S.ContactBoxFormTextArea
									placeholder="Menssagem"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									required
								/>
								<S.ContactBoxFormBtn onClick={handleSubmit}>Enviar</S.ContactBoxFormBtn>
							</S.ContactBoxForm>
						</S.ContactBoxFormBox>
					</S.ContactBoxInfoBox>
				</S.ContactBoxContent>
			</S.ContactBoxContainer>
		</S.ContactBoxWrapper>
	);
}

export default ContactBox;
