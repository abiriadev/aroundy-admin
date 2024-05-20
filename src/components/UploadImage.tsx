import Uploady from '@rpldy/uploady'
import UploadButton from '@rpldy/upload-button'
import UploadPreview from '@rpldy/upload-preview'
import UploadDropZone from '@rpldy/upload-drop-zone'
import { withPasteUpload } from '@rpldy/upload-paste'

const Zone = withPasteUpload(UploadDropZone)

export const UploadImage = () => {
	return (
		<Uploady destination={{}}>
			<UploadPreview />
			<Zone className="border-[3px] border-dashed border-[#12b890] rounded-md w-[300px] h-[200px]">
				<UploadButton className="w-full h-full border-0 bg-[#ecfdf7]">
					<span>이곳에 파일을 업로드하세요.</span>
				</UploadButton>
			</Zone>
		</Uploady>
	)
}
