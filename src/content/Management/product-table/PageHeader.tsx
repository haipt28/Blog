import {
  Typography,
  Button,
  Grid,
  Container,
  Dialog,
  DialogTitle,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Stack,
  styled,
  FormControlLabel,
  Switch,
  TextField,
  MenuItem
} from '@mui/material';

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { useAuth } from '../../../../hooks';
import { useEffect, useState } from 'react';
import { CategoryApi } from '../../../../api-client/category-api';
import { productApi } from '../../../../api-client/product-api';
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

  const [categoryList, setCategoryList] = useState<any[]>([]);
  useEffect(() => {
    CategoryApi.getAllCategory().then((res) => {
      setCategoryList(res.data);
    });
  }, []);
  const [name, setName] = useState('');
  const [category, setCategory] = useState<any>(
    categoryList.length > 0 ? categoryList[0].ID : ''
  );
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [isLimited, setIsLimited] = useState(false);
  const [shortDescription, setShortDescription] = useState('');

  const handleChangeName = (event: any) => {
    setName(event.target.value);
  };
  const handleChangePrice = (event: any) => {
    setPrice(event.target.value);
  };
  const handleChangeStock = (event: any) => {
    setStock(event.target.value);
  };
  const handleChangeShortDescription = (event: any) => {
    setShortDescription(event.target.value);
  };
  const handleChangeLimited = (event: any) => {
    setIsLimited(event.target.checked);
  };
  const handleChangeCategory = (event: any) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    //
    const payload: any = {
      ProductName: name,
      ProductPrice: price,
      ProductDescription: shortDescription,
      ProductShortDescription: 'no description',
      ProductStock: stock,
      ProductUnlimited: isLimited,
      ProductCategoriesID: category
    };
    productApi.postProduct(payload).finally(() => {
      onClose();
    });
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth>
      <DialogTitle variant="h4" sx={{ textAlign: 'center', py: 3 }}>
        Th??m s???n ph???m
      </DialogTitle>
      <Container>
        <Stack spacing={2}>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInputWrapper
              placeholder="T??n s???n ph???m"
              value={name}
              onChange={handleChangeName}
              autoFocus
            />
          </FormControl>
          <Stack direction={'row'} spacing={2}>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                placeholder="Gi?? s???n ph???m"
                type="number"
                value={price}
                onChange={handleChangePrice}
              />
            </FormControl>
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                placeholder="S??? l?????ng s???n ph???m"
                type="number"
                value={stock}
                onChange={handleChangeStock}
              />
            </FormControl>
          </Stack>
          <FormControl variant="outlined" fullWidth>
            <OutlinedInputWrapper
              placeholder="M?? t??? nhanh"
              value={shortDescription}
              onChange={handleChangeShortDescription}
            />
          </FormControl>
          <TextField
            id="outlined-select-currency"
            select
            label="Danh m???c s???n ph???m"
            value={category}
            onChange={handleChangeCategory}
          >
            {categoryList &&
              categoryList.map((option) => (
                <MenuItem key={option.ID} value={option.ID}>
                  {option.CategoryName}
                </MenuItem>
              ))}
          </TextField>
          <FormControlLabel
            control={<Switch name="antoine" />}
            label="Limited"
            checked={isLimited}
            onChange={handleChangeLimited}
          />
        </Stack>
        <Stack sx={{ py: 2, alignItems: 'flex-end' }}>
          <Button
            variant="outlined"
            sx={{ width: '120px' }}
            onClick={handleSubmit}
          >
            Th??m
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
          S???n ph???m
        </Typography>
        <Typography variant="subtitle2">
          {user.name}, ????y l?? s???n ph???m c???a b???n
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={handleClickOpen}
        >
          Th??m s???n ph???m
        </Button>
        <SimpleDialog open={open} onClose={handleClose} />
      </Grid>
    </Grid>
  );
}

export default PageHeader;
