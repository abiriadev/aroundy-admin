import Box from '@mui/joy/Box'
import List from '@mui/joy/List'
import ListItem from '@mui/joy/ListItem'
import ListItemButton from '@mui/joy/ListItemButton'
import Home from '@mui/icons-material/Home'

export const AppBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<List orientation="horizontal">
				<ListItem>
					<ListItemButton>
						<Home />
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						컨텐츠관리
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>
						회사관리
					</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>CHAT</ListItemButton>
				</ListItem>
				<ListItem>
					<ListItemButton>회원</ListItemButton>
				</ListItem>
			</List>
		</Box>
	)
}
