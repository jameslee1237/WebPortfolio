import GitHubIcon from '@mui/icons-material/GitHub';

const GitHubLink = () => {
    return (
        <a href="https://github.com/jameslee1237" target="blank" rel="noopener noreferrer">
            <GitHubIcon style={{ fontSize: 60 }} className="hover:scale-110" />
        </a>
    );
};

export default GitHubLink;