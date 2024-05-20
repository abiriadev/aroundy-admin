import Uploady, { FILE_STATES } from '@rpldy/uploady'
import UploadButton from '@rpldy/upload-button'
import UploadPreview from '@rpldy/upload-preview'
import UploadDropZone from '@rpldy/upload-drop-zone'
import { withPasteUpload } from '@rpldy/upload-paste'
import { useState } from 'react'
import { clsx } from 'clsx'

const Zone = withPasteUpload(UploadDropZone)

export const UploadImage = () => {
	const [uploaded, setUploaded] = useState(false)

	return (
		<div
			className={clsx(
				'aspect-video border-[3px] border-solid border-[#12b890] rounded-md',
				uploaded ? 'border-solid' : 'border-dashed',
			)}
		>
			<Uploady
				// destination={{}}
				multiple
			>
				<UploadPreview
					PreviewComponent={i => {
						if (i) setUploaded(true)

						return <img src={i.url} />
					}}
				/>
				{uploaded || (
					<Zone className="w-full h-full">
						<UploadButton className="w-full h-full border-0 bg-[#ecfdf7] p-6 flex justify-center items-center">
							<span className="text-lg">
								이곳에 파일을 업로드하세요.
							</span>
						</UploadButton>
					</Zone>
				)}
			</Uploady>
		</div>
	)
}
