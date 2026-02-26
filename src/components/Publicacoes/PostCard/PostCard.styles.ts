import styled from "styled-components";


export const PostCard = styled.div`
    background: #FFF;
    border-radius: 20px;
    border: 2px solid #D0D5DD;
    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const PostInputRow = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const PostAvatarImage = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
    flex-shrink: 0; /* Mantém o tamanho mesmo com pouco espaço */
`;

export const PostInput = styled.input`
    flex: 1;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
    padding: 10px 14px;
    outline: none;
    
    color: #667085;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;

    transition:
        border-color 1s ease,
        background 1s ease;
    &::placeholder {
        color: #a0aec0;
    }
    &:focus {
        border-color: #667eea;
        background: #fffç
    }
`;

export const PostPublishButton = styled.button`
    width: 106px;
    background: #101828;
    border: none;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;

    color: #FFF;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;

    transition:
        border-color 1s ease,
        background 1s ease;
    &:hover {
        background: #0f1946;
    }
`;

export const PostActionRow = styled.div`
    display: flex;
    gap: 16px;
`;

export const PostActionButton = styled.button`
    background: transparent;
    border: 1px solid #D0D5DD;
    border-radius: 8px;
    padding: 8px 14px;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 8px;

    color: #101828;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;

    svg {
        font-size: 1rem;
    }

    transition:
        border-color 1s ease,
        background 1s ease;
    &:hover {
        background: #f4f5f9;
    }
`;

