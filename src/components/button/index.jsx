import styles from './style.module.css';

const CustomButton = ({ text, variation = 'primary' }) => {
    return (
        <button className={styles[variation]}>
            {text}
        </button>
    );
};

export default CustomButton;
