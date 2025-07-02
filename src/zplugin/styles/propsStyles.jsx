// import '../../../../../css/definitions.css';

export const customSelectStyles = {
    control: (provided, state) => ({
        ...provided,
        height: '38px',
        minHeight: '38px',
        backgroundColor: '#f9f9f9',
        borderColor: state.isFocused ? 'var(--primary-color)' : provided.borderColor,
        boxShadow: state.isFocused 
        ? `0 0 0 1px var(--primary-color)` 
        : provided.boxShadow,
        '&:hover': {
        borderColor: state.isFocused 
            ? 'var(--primary-color)' 
            : provided.borderColor
        },
        display: 'flex',
        alignItems: 'center',
        lineHeight: 'normal' // Adicione esta propriedade
    }),

    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected 
          ? 'var(--dark-color)' 
          : state.isFocused 
            ? 'var(--dark-color)' 
            : 'var(--white-color)',
        color: state.isSelected || state.isFocused 
          ? 'var(--white-color)' 
          : 'var(--dark-color)',
        borderRadius: '5px',
        cursor: 'pointer',
        display: 'absolute',

        ':active': {
            backgroundColor: 'var(--medium-gray-color)',
        },
    }),

    // Ajustar o container de valor para manter a altura correta
    valueContainer: (provided) => ({
        ...provided,
        height: '38px',
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start' // Ajuda no alinhamento horizontal
    }),
    
    // Ajustar o indicador (seta) para manter a altura correta
    indicatorsContainer: (provided) => ({
        ...provided,
        height: '38px'
    }),
    
    singleValue: (provided) => ({
        ...provided,
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        fontSize: '14px',
        color: '#000',
    }),
    
    placeholder: (provided) => ({
        ...provided,
        fontSize: '14px',
        margin: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '100%',  // Garante que o placeholder ocupe toda a altura disponível
        position: 'absolute',  // Isso ajuda a posicionar corretamente
        top: 0,
        transform: 'translateY(0)'  // Substitui qualquer transformação padrão
    }),

    // Limitar altura do menu e adicionar scrolling
    menuList: (provided) => ({
        ...provided,
        maxHeight: '200px',   // Altura máxima, ajuste conforme necessário
    }),


};

