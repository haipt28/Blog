import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import CategoryIcon from '@mui/icons-material/Category';
import {
  Button,
  Container,
  Dialog,
  DialogTitle,
  FormControl,
  Grid,
  InputAdornment,
  OutlinedInput,
  Stack,
  styled,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { CategoryApi } from '../../../../api-client/category-api';
import { useAuth } from '../../../../hooks';
const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

function SimpleDialog(props) {
  const { onClose, open } = props;
  const handleClose = () => {
    onClose();
  };
  const [categoryName, setCategoryName] = useState('');
  const handleChangeName = (event: any) => {
    setCategoryName(event.target.value);
  };

  const handleSubmit = () => {
    if (categoryName !== '') {
      CategoryApi.postCategory({ CategoryName: categoryName }).finally(() => {
        onClose();
      });
    }
  };
  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle variant="h4" sx={{ textAlign: 'center', py: 3 }}>
        Thêm danh mục sản phẩm
      </DialogTitle>
      <Container>
        <FormControl variant="outlined" fullWidth>
          <OutlinedInputWrapper
            placeholder="Tên danh mục"
            startAdornment={
              <InputAdornment position="start">
                <CategoryIcon />
              </InputAdornment>
            }
            value={categoryName}
            onChange={handleChangeName}
          />
        </FormControl>
        <Stack sx={{ py: 2, alignItems: 'flex-end' }}>
          <Button
            variant="outlined"
            sx={{ width: '120px' }}
            onClick={handleSubmit}
          >
            Thêm
          </Button>
        </Stack>
      </Container>
    </Dialog>
  );
}

function PageHeader() {
  const { profile }: any = useAuth();
  const user = {
    name: profile?.data?.Name,
    avatar: '/static/images/avatars/1.jpg'
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Danh mục sản phẩm
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, Đây là danh mục sản phẩm của bạn
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleClickOpen}
        >
          Tạo danh mục
        </Button>
        <SimpleDialog open={open} onClose={handleClose} />
      </Grid>
    </Grid>
  );
}

export default PageHeader;
